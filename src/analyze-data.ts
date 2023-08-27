/// <reference path="./generate-typescript-annotations.d.ts" />
/// <reference path="./data.d.ts" />

import * as path from 'path';
import * as semver from 'semver';

import * as types from './types';
import * as P5 from './p5_classes';
import ItemCache from './itemcache';

function getVersionString(version: string) {
  try {
    return `${semver.major(version)}.${semver.minor(version)}`;
  } catch (_) {
    return '0.0';
  }
}

function populateClassConstants(constants: Map<string, RegExpExecArray[]>, classitem: YUIDocsClass) {
  types.populateConstantType(constants, classitem, classitem);
}

function populateMethodConstants(constants: Map<string, RegExpExecArray[]>, method: CategorizedMethod) {
  types.populateConstantType(constants, method.classitem, method.overload);
}


function populateCategorizedConstants(constants: Map<string, RegExpExecArray[]>, categorized: CategorizedClassitems) {
  for (const im of categorized.instanceMethods) {
    populateMethodConstants(constants, im);
  }
  for (const sm of categorized.staticMethods) {
    populateMethodConstants(constants, sm);
  }
}

class CategorizedClassitems {
  instanceMethods: CategorizedMethod[];
  staticMethods: CategorizedMethod[];
  properties: YUIDocsClassitemProperty[];
  missing: YUIDocsClassitem[];
  constructor() {
    this.instanceMethods = [];
    this.staticMethods = [];
    this.properties = [];
    this.missing = [];
  }
}

export class ProcessedCategorizedClassitems {
  instanceMethods: ProcessedCategorizedMethod[];
  staticMethods: ProcessedCategorizedMethod[];
  properties: ProcessedCategorizedProperty[];
  invalidProperties: InvalidProperty[];
  literals: Map<string, string>;
  constructor() {
    this.instanceMethods = [];
    this.staticMethods = [];
    this.properties = [];
    this.invalidProperties = [];
    this.literals = new Map();
  }
}

export class DefinitionAST {
  categorized: CategorizedClassitems;
  processed: ProcessedCategorizedClassitems;
  extends?: string;
  _constructor: CheckedMethod;
  constructor() {
    this.categorized = new CategorizedClassitems();
    this.processed = new ProcessedCategorizedClassitems();
    this.extends = undefined;
    this._constructor;
  }
}
undefined
class AugmentationAST {
  categorized: CategorizedClassitems;
  processed: ProcessedCategorizedClassitems;
  constructor() {
    this.categorized = new CategorizedClassitems();
    this.processed = new ProcessedCategorizedClassitems();
  }
}

export class FileAST {
  definitions: ItemCache<DefinitionAST>;
  augmentations: ItemCache<AugmentationAST>;
  constructor() {
    this.definitions = new ItemCache((_) => new DefinitionAST());
    this.augmentations = new ItemCache((_) => new AugmentationAST());
  }
}


function groupClassitems(classitems: YUIDocsClassitem[]): ItemCache<NamedYUIDocsClassitem[]> {

  const hasNameHack = classitems.filter(arg => arg['name'] !== undefined);

  const hasName = hasNameHack;

  const grouped = new ItemCache((_) => []);

  for (const classitem of hasName) {
    grouped.get(classitem.class).push(classitem);
  }

  return grouped;
}

function chainName(item: Methodish) {
  const className: string | undefined = item['class'];
  if (className) {
    const match = className.match(P5.CLASS_RE);
    if (match?.[1]) {
      return match[1];
    }
    return className;
  }
  return item.name;
}


function populateDefinitions(filesCache: ItemCache<FileAST>, translateType: TypeTranslator, theClass: YUIDocsClass) {
  const file = filesCache.get(classitemFilename(theClass));
  const classAST = file.definitions.get(theClass.name);
  if (theClass.is_constructor) {
    classAST._constructor = checkMethod(translateType, theClass, theClass);
  }
  classAST.extends = theClass.extends;
}

function isDefiningFile(classes: YUIDocsClasses, classitem: YUIDocsClassitem) {
  return classes[classitem.class].file === classitem.file;
}


function getClassitemAST(classes: YUIDocsClasses, file: FileAST, classitem: NamedYUIDocsClassitem, className: string) {
  const defining = isDefiningFile(classes, classitem);
  if (defining) {
    return file.definitions.get(className).categorized;
  } else {
    return file.augmentations.get(className).categorized;
  }
}


function definitionImportName(filename: string) {
  const dirname = path.dirname(filename);
  const name = path.basename(filename, '.js');
  return path.join(dirname, name);
}


function classitemFilename(classitem: HasFile): string {
  return definitionImportName(classitem.file);
}


function categorizeClassitems(filesCache: ItemCache<FileAST>, classes: YUIDocsClasses, groupedItems: ItemCache<NamedYUIDocsClassitem[]>, className: string) {
  const classitems = groupedItems.get(className) || [];

  for (const classitem of classitems) {
    const file = filesCache.get(classitemFilename(classitem));
    const classitemAST = getClassitemAST(classes, file, classitem, className);

    if (classitem.itemtype === 'method') {
      const overloads = classitem.overloads || [classitem];
      for (const overload of overloads) {
        if (overload.static === 1) {
          classitemAST.staticMethods.push({
            classitem,
            overload
          });
        } else {
          classitemAST.instanceMethods.push({
            classitem,
            overload
          });
        }
      }
    } else if (classitem.itemtype === 'property') {
      classitemAST.properties.push(classitem);
    } else {
      classitemAST.missing.push(classitem);
    }
  }
}

// http://stackoverflow.com/a/2008353/2422398
const JS_SYMBOL_RE = /^[$A-Z_][0-9A-Z_$]*$/i;

function checkMethod(translateType: TypeTranslator, classitem: Methodish, overload: Overloadish): CheckedMethod {
  const errors: string[] = [];
  const typedParams: Map<string, TranslatedType[]> = new Map();
  let optionalParamFound = false;
  const itemName = classitem.name;

  if (!(JS_SYMBOL_RE.test(itemName) || classitem['is_constructor'])) {
    errors.push(`"${itemName}" is not a valid JS symbol name`);
  }

  (overload.params || []).forEach(function (param) {
    if (param.optional) {
      optionalParamFound = true;
    } else if (optionalParamFound) {
      errors.push(
        `required param "${param.name}" follows an optional param`
      );
    }

    if (typedParams.has(param.name)) {
      errors.push(`param "${param.name}" is defined multiple times`);
    }

    if (!JS_SYMBOL_RE.test(param.name)) {
      errors.push(`param "${param.name}" is not a valid JS symbol name`);
    }

    const paramType = translateType(param.type, []);

    if (paramType.length === 0) {
      errors.push(`param "${param.name}" has invalid type: ${param.type}`);
      typedParams.set(param.name, [types.basic(param.type)]);
    } else {
      typedParams.set(param.name, paramType);
    }
  });

  let returnType: TranslatedType[];

  if (overload['chainable']) {
    returnType = [types.basic(chainName(classitem))];
  } else if (overload.return) {
    const translatedReturnType = translateType(overload.return.type, []);
    if (translatedReturnType.length === 0) {
      errors.push(`return has invalid type: ${overload.return.type}`);
    } else {
      returnType = translatedReturnType;
    }
  } else {
    returnType = [types.basic('void')];
  }

  return {
    errors,
    typedParams,
    returnType,
    classitem,
    overload
  };
}

function overloadsParameterDescription(overloads: Overloadish[]) {
  const descriptions = new Map<string, string>();
  for (const overload of overloads) {
    for (const param of overload.params || []) {
      if (param.description && !descriptions.has(param.name)) {
        descriptions.set(param.name, param.description);
      }
    }
  }
  return descriptions;
}


function methodDescription(classitem: YUIDocsClassitemMethod, overload: Overloadish): MethodDescription {
  const description = classitem.description;
  if (!description) {
    return;
  }
  const params: DescriptionParam[] = [];

  if (overload.params) {
    let allOverloads: Overloadish[] = [classitem];
    if (classitem.overloads) {
      allOverloads.push(...classitem.overloads);
    }

    const descriptions = overloadsParameterDescription(allOverloads);
    for (const param of overload.params) {
      const description = descriptions.get(param.name);
      if (description) {
        params.push({
          description,
          name: param.name,
          optional: param.optional
        });
      }
    }
  }

  return {
    description,
    params,
    chainable: overload['chainable'],
    returns: overload.return?.description
  };
}

function isStringType(type: TranslatedType[]) {
  if (type.length === 1) {
    const v = type[0];
    if (v.type === 'basic') {
      return v.value === 'string';
    }
  }
  return false;
}

function wrapLiteral(literal: string, isString: boolean) {
  if (isString) {
    return `'${literal.replace(/'/g, "\\'")}'`;
  }
  return literal;
}


function processCategorized(translateType: TypeTranslator, categorized: CategorizedClassitems) {
  const processed = new ProcessedCategorizedClassitems();
  for (const sm of categorized.staticMethods) {
    const overload = sm.overload;
    const classitem = sm.classitem;
    const itemname = classitem.name;
    const checked = checkMethod(translateType, classitem, overload);
    processed.staticMethods.push({
      description: methodDescription(classitem, overload),
      params: overload.params || [],
      name: itemname,
      checked
    });
  }

  for (const im of categorized.instanceMethods) {
    const overload = im.overload;
    const classitem = im.classitem;
    const itemname = classitem.name;
    const checked = checkMethod(translateType, classitem, overload);
    processed.instanceMethods.push({
      description: methodDescription(classitem, overload),
      params: overload.params || [],
      name: itemname,
      checked
    });
  }

  for (const classitem of categorized.properties) {
    const itemName = classitem.name;
    if (JS_SYMBOL_RE.test(itemName)) {
      let translatedType = translateType(classitem.type, [types.basic('any')]);
      let defaultValue = classitem.default;
      const typeIsString = isStringType(translatedType);
      if (classitem.final && typeIsString && !defaultValue) {
        defaultValue = itemName.toLowerCase().replace(/_/g, '-');
      }

      if (classitem.final && defaultValue) {
        translatedType = [types.basic(`p5.${itemName}`)];
        processed.literals.set(
          itemName,
          wrapLiteral(defaultValue, typeIsString)
        );
      }

      if (translatedType.length > 0) {
        // TODO: fix this type error.
        processed.properties.push({
          name: itemName,
          type: translatedType,
          final: classitem.final,
          description: classitem.description
        });
      } else {
        processed.invalidProperties.push({
          type: 'invalid-type',
          value: classitem
        });
      }
    } else {
      processed.invalidProperties.push({
        type: 'invalid-name',
        value: classitem
      });
    }
  }

  return processed;
}

class Classes {
  p5Aliases: string[];
  p5Subclasses: string[];
  unknownClasses: string[];
  missingTypes: Set<string>;
  files: ItemCache<FileAST>;
  constructor(yuidocs: YUIDocsData, constants: Map<string, RegExpExecArray[]>) {
    this.p5Aliases = [];
    this.p5Subclasses = [];
    this.unknownClasses = [];
    this.missingTypes = new Set();

    for (const className of Object.keys(yuidocs.classes)) {
      if ((P5.ALIASES as string[]).includes(className)) {
        this.p5Aliases.push(className);
      } else if (P5.CLASS_RE.test(className)) {
        this.p5Subclasses.push(className);
      } else {
        this.unknownClasses.push(className);
      }
    }

    const knownClassnames = this.p5Aliases.concat(this.p5Subclasses);
    this.files = new ItemCache((_) => new FileAST());
    const groupedItems = groupClassitems(yuidocs.classitems);
    const typeTranslator: TypeTranslator = (type, defaultType) =>
      types.translateType(
        yuidocs,
        constants,
        this.missingTypes,
        type,
        defaultType
      );

    for (const className of knownClassnames) {
      categorizeClassitems(
        this.files,
        yuidocs.classes,
        groupedItems,
        className
      );
    }

    for (const className of knownClassnames) {
      populateClassConstants(constants, yuidocs.classes[className]);
    }

    for (const file of this.files.items.values()) {
      for (const definition of file.definitions.items.values()) {
        populateCategorizedConstants(constants, definition.categorized);
      }
      for (const augmentation of file.augmentations.items.values()) {
        populateCategorizedConstants(constants, augmentation.categorized);
      }
    }

    for (const className of knownClassnames) {
      populateDefinitions(
        this.files,
        typeTranslator,
        yuidocs.classes[className]
      );
    }

    for (const file of this.files.items.values()) {
      for (const definition of file.definitions.items.values()) {
        definition.processed = processCategorized(
          typeTranslator,
          definition.categorized
        );
      }
      for (const augmentation of file.augmentations.items.values()) {
        augmentation.processed = processCategorized(
          typeTranslator,
          augmentation.categorized
        );
      }
    }
  }
}

function addLiterals(literals: Map<string, string>, classitems: ProcessedCategorizedClassitems) {
  for (const [key, value] of classitems.literals) {
    literals.set(key, value);
  }
}

function populateLiterals(files: Map<string, FileAST>) {
  const literals: Map<string, string> = new Map();
  for (const file of files.values()) {
    for (const definition of file.definitions.items.values()) {
      addLiterals(literals, definition.processed);
    }
    for (const augmentation of file.augmentations.items.values()) {
      addLiterals(literals, augmentation.processed);
    }
  }

  return literals;
}

export class DefinitionsAST {
  constants: Map<string, RegExpExecArray[]>;
  version: string;
  versionString: string;
  classes: Classes;
  literals: Map<string, string>;
  mainFile: string;
  constructor(yuidocs: YUIDocsData) {
    this.constants = new Map();
    this.version = yuidocs.project.version;
    this.versionString = getVersionString(this.version);
    this.classes = new Classes(yuidocs, this.constants);
    this.literals = populateLiterals(this.classes.files.items);
    this.mainFile = classitemFilename(yuidocs.classes['p5']);
  }
};
