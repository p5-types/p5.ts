/// @ts-check

/// <reference path="./generate-typescript-annotations_.d.ts" />
/// <reference path="./data.d.ts" />

const path = require('upath');
const semver = require('semver');

const types = require('./types');
const P5 = require('./p5_classes');
const ItemCache = require('./itemcache');

/**
 *
 * @param {string} version
 */
function getVersionString(version) {
  try {
    return `${semver.major(version)}.${semver.minor(version)}`;
  } catch (_) {
    return '0.0';
  }
}

/**
 *
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {YUIDocsClass} classitem
 */
function populateClassConstants(constants, classitem) {
  types.populateConstantType(constants, classitem, classitem);
}

/**
 *
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {CategorizedMethod} method
 */
function populateMethodConstants(constants, method) {
  types.populateConstantType(constants, method.classitem, method.overload);
}

/**
 *
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {CategorizedClassitems} categorized
 */
function populateCategorizedConstants(constants, categorized) {
  for (const im of categorized.instanceMethods) {
    populateMethodConstants(constants, im);
  }
  for (const sm of categorized.staticMethods) {
    populateMethodConstants(constants, sm);
  }
}

class CategorizedClassitems {
  constructor() {
    /**
     * @type {CategorizedMethod[]}
     */
    this.instanceMethods = [];
    /**
     * @type {CategorizedMethod[]}
     */
    this.staticMethods = [];
    /**
     * @type {YUIDocsClassitemProperty[]}
     */
    this.properties = [];
    /**
     * @type {YUIDocsClassitem[]}
     */
    this.missing = [];
  }
}

class ProcessedCategorizedClassitems {
  constructor() {
    /**
     * @type {ProcessedCategorizedMethod[]}
     */
    this.instanceMethods = [];
    /**
     * @type {ProcessedCategorizedMethod[]}
     */
    this.staticMethods = [];
    /**
     * @type {ProcessedCategorizedProperty[]}
     */
    this.properties = [];
    /**
     * @type {InvalidProperty[]}
     */
    this.invalidProperties = [];
    /**
     * @type {Map<string, string>}
     */
    this.literals = new Map();
  }
}
module.exports.ProcessedCategorizedClassitems = ProcessedCategorizedClassitems;

class DefinitionAST {
  constructor() {
    this.categorized = new CategorizedClassitems();
    this.processed = new ProcessedCategorizedClassitems();
    /**
     * @type {string | undefined}
     */
    this.extends = undefined;
    /**
     * @type {CheckedMethod | undefined}
     */
    this.constructor = undefined;
  }
}
module.exports.DefinitionAST = DefinitionAST;

class AugmentationAST {
  constructor() {
    this.categorized = new CategorizedClassitems();
    this.processed = new ProcessedCategorizedClassitems();
  }
}

class FileAST {
  constructor() {
    this.definitions = new ItemCache(_ => new DefinitionAST());
    this.augmentations = new ItemCache(_ => new AugmentationAST());
  }
}
module.exports.FileAST = FileAST;

/**
 *
 * @type {IsNamedYUIDocsClassitem}
 */
function isNamedClassitem(arg) {
  return arg['name'] !== undefined;
}

/**
 *
 * @param {YUIDocsClassitem[]} classitems
 * @returns {ItemCache<NamedYUIDocsClassitem[]>}
 */
function groupClassitems(classitems) {
  /**
   * @type {*}
   */
  const hasNameHack = classitems.filter(isNamedClassitem);
  /**
   * @type {NamedYUIDocsClassitem[]}
   */
  const hasName = hasNameHack;
  /**
   * @type {ItemCache<NamedYUIDocsClassitem[]>}
   */
  const grouped = new ItemCache(_ => []);

  for (const classitem of hasName) {
    grouped.get(classitem.class).push(classitem);
  }

  return grouped;
}

/**
 *
 * @param {Methodish} item
 */
function chainName(item) {
  /**
   * @type {string | undefined}
   */
  const className = item['class'];
  if (className) {
    const match = className.match(P5.CLASS_RE);
    if (match && match[1]) {
      return match[1];
    }
    return className;
  }
  return item.name;
}

/**
 *
 * @param {ItemCache<FileAST>} filesCache
 * @param {TypeTranslator} translateType
 * @param {YUIDocsClass} theClass
 */
function populateDefinitions(filesCache, translateType, theClass) {
  const file = filesCache.get(classitemFilename(theClass));
  const classAST = file.definitions.get(theClass.name);
  if (theClass.is_constructor) {
    classAST.constructor = checkMethod(translateType, theClass, theClass);
  }
  classAST.extends = theClass.extends;
}

/**
 *
 * @param {YUIDocsClasses} classes
 * @param {YUIDocsClassitem} classitem
 */
function isDefiningFile(classes, classitem) {
  return classes[classitem.class].file === classitem.file;
}

/**
 *
 * @param {YUIDocsClasses} classes
 * @param {FileAST} file
 * @param {NamedYUIDocsClassitem} classitem
 * @param {string} className
 */
function getClassitemAST(classes, file, classitem, className) {
  const defining = isDefiningFile(classes, classitem);
  if (defining) {
    return file.definitions.get(className).categorized;
  } else {
    return file.augmentations.get(className).categorized;
  }
}

/**
 *
 * @param {string} filename
 */
function definitionImportName(filename) {
  const dirname = path.dirname(filename);
  const name = path.basename(filename, '.js');
  return path.joinSafe(dirname, name);
}

/**
 *
 * @param {HasFile} classitem
 * @returns {string}
 */
function classitemFilename(classitem) {
  return definitionImportName(classitem.file);
}

/**
 *
 * @param {ItemCache<FileAST>} filesCache
 * @param {YUIDocsClasses} classes
 * @param {ItemCache<NamedYUIDocsClassitem[]>} groupedItems
 * @param {string} className
 */
function categorizeClassitems(filesCache, classes, groupedItems, className) {
  const classitems = groupedItems.get(className);

  for (const classitem of classitems) {
    const file = filesCache.get(classitemFilename(classitem));
    const classitemAST = getClassitemAST(classes, file, classitem, className);

    if (classitem.itemtype === 'method') {
      const overloads = classitem.overloads || [classitem];
      for (const overload of overloads) {
        if (overload.static === 1) {
          classitemAST.staticMethods.push({
            classitem: classitem,
            overload: overload
          });
        } else {
          classitemAST.instanceMethods.push({
            classitem: classitem,
            overload: overload
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

/**
 *
 * @param {TypeTranslator} translateType
 * @param {Methodish} classitem
 * @param {Overloadish} overload
 * @returns {CheckedMethod}
 */
function checkMethod(translateType, classitem, overload) {
  /**
   * @type {string[]}
   */
  const errors = [];
  /**
   * @type {Map<string, TranslatedType[]>}
   */
  const typedParams = new Map();
  let optionalParamFound = false;
  const itemName = classitem.name;

  if (!(JS_SYMBOL_RE.test(itemName) || classitem['is_constructor'])) {
    errors.push('"' + itemName + '" is not a valid JS symbol name');
  }

  (overload.params || []).forEach(function(param) {
    if (param.optional) {
      optionalParamFound = true;
    } else if (optionalParamFound) {
      errors.push(
        'required param "' + param.name + '" follows an ' + 'optional param'
      );
    }

    if (typedParams.has(param.name)) {
      errors.push('param "' + param.name + '" is defined multiple times');
    }

    if (!JS_SYMBOL_RE.test(param.name)) {
      errors.push('param "' + param.name + '" is not a valid JS symbol name');
    }

    const paramType = translateType(param.type, []);

    if (paramType.length === 0) {
      errors.push('param "' + param.name + '" has invalid type: ' + param.type);
      typedParams.set(param.name, [types.basic(param.type)]);
    } else {
      typedParams.set(param.name, paramType);
    }
  });

  /**
   * @type {TranslatedType[]}
   */
  let returnType;

  if (overload['chainable']) {
    returnType = [types.basic(chainName(classitem))];
  } else if (overload.return) {
    const translatedReturnType = translateType(overload.return.type, []);
    if (translatedReturnType.length === 0) {
      errors.push('return has invalid type: ' + overload.return.type);
    } else {
      returnType = translatedReturnType;
    }
  } else {
    returnType = [types.basic('void')];
  }

  return {
    errors: errors,
    typedParams: typedParams,
    returnType: returnType,
    classitem: classitem,
    overload: overload
  };
}

/**
 *
 * @param {Overloadish[]} overloads
 */
function overloadsParameterDescription(overloads) {
  /**
   * @type {Map<string, string>}
   */
  const descriptions = new Map();
  for (const overload of overloads) {
    for (const param of overload.params || []) {
      if (param.description && !descriptions.has(param.name)) {
        descriptions.set(param.name, param.description);
      }
    }
  }
  return descriptions;
}

/**
 *
 * @param {YUIDocsClassitemMethod} classitem
 * @param {Overloadish} overload
 * @returns {MethodDescription | undefined}
 */
function methodDescription(classitem, overload) {
  const description = classitem.description;
  if (!description) {
    return;
  }

  /**
   * @type {DescriptionParam[]}
   */
  const params = [];

  if (overload.params) {
    /**
     * @type {Overloadish[]}
     */
    let allOverloads = [classitem];
    if (classitem.overloads) {
      allOverloads.push(...classitem.overloads);
    }

    const descriptions = overloadsParameterDescription(allOverloads);
    for (const param of overload.params) {
      const description = descriptions.get(param.name);
      if (description) {
        params.push({
          description: description,
          name: param.name,
          optional: param.optional
        });
      }
    }
  }

  return {
    description: description,
    params: params,
    chainable: overload['chainable'],
    returns: overload.return && overload.return.description
  };
}

/**
 *
 * @param {TranslatedType[]} type
 */
function isStringType(type) {
  if (type.length === 1) {
    const v = type[0];
    if (v.type === 'basic') {
      return v.value === 'string';
    }
  }
  return false;
}

/**
 *
 * @param {string} literal
 * @param {boolean} isString
 */
function wrapLiteral(literal, isString) {
  if (isString) {
    return "'" + literal.replace(/'/g, "\\'") + "'";
  }
  return literal;
}

/**
 *
 * @param {TypeTranslator} translateType
 * @param {CategorizedClassitems} categorized
 */
function processCategorized(translateType, categorized) {
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
      checked: checked
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
      checked: checked
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
  /**
   *
   * @param {YUIDocsData} yuidocs
   * @param {Map<string, RegExpExecArray[]>} constants
   */
  constructor(yuidocs, constants) {
    /**
     * @type {string[]}
     */
    this.p5Aliases = [];
    /**
     * @type {string[]}
     */
    this.p5Subclasses = [];
    /**
     * @type {string[]}
     */
    this.unknownClasses = [];
    /**
     * @type {Set<string>}
     */
    this.missingTypes = new Set();

    for (const className of Object.keys(yuidocs.classes)) {
      if (P5.ALIASES.indexOf(className) !== -1) {
        this.p5Aliases.push(className);
      } else if (P5.CLASS_RE.test(className)) {
        this.p5Subclasses.push(className);
      } else {
        this.unknownClasses.push(className);
      }
    }

    const knownClassnames = this.p5Aliases.concat(this.p5Subclasses);
    this.files = new ItemCache(filename => new FileAST());
    const groupedItems = groupClassitems(yuidocs.classitems);

    /**
     *
     * @type {TypeTranslator}
     */
    const typeTranslator = (type, defaultType) =>
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

/**
 *
 * @param {Map<string, string>} literals
 * @param {ProcessedCategorizedClassitems} classitems
 */
function addLiterals(literals, classitems) {
  for (const item of classitems.literals) {
    literals.set(item[0], item[1]);
  }
}

/**
 *
 * @param {Map<string, FileAST>} files
 */
function populateLiterals(files) {
  /**
   * @type {Map<string, string>}
   */
  const literals = new Map();
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

module.exports.DefinitionsAST = class DefinitionsAST {
  /**
   *
   * @param {YUIDocsData} yuidocs
   */
  constructor(yuidocs) {
    /**
     * @type {Map<string, RegExpExecArray[]>}
     */
    this.constants = new Map();

    /**
     * @type {string}
     */
    this.version = yuidocs.project.version;
    /**
     * @type {string}
     */
    this.versionString = getVersionString(this.version);

    this.classes = new Classes(yuidocs, this.constants);
    this.literals = populateLiterals(this.classes.files.items);
    this.mainFile = classitemFilename(yuidocs.classes['p5']);
  }
};
