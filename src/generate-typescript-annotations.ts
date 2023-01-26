/// @ts-check

/// <reference path="./generate-typescript-annotations.d.ts" />
/// <reference path="./data.d.ts" />


import * as fs from 'fs-extra';
import * as path from 'upath';
import { PathLike } from 'fs';


import { Emitter } from './emitter';
import ItemCache from './itemcache';
import * as analyze from './analyze-data';
import * as P5 from './p5_classes';
import * as formatters from './formatters';

const GRAPHICS_WORKAROUND_NAME = '__Graphics__';


function patchItemFile(classitem: HasFile) {
  if (classitem.file !== undefined) {
    classitem.file = classitem.file.replace(/\\/g, '/');
  }
}


function patchYUIDocs(yuidocs: YUIDocsData) {
  delete yuidocs.classes['p5.sound'];
  delete yuidocs.modules['Foundation'];
  delete yuidocs.files['src/core/reference.js'];

  const modules = yuidocs.modules;
  const classes = yuidocs.classes;
  const classitems = yuidocs.classitems;
  for (const key in modules) {
    if (modules.hasOwnProperty(key)) {
      const value = modules[key];
      if (value.file !== undefined) {
        // inlined patchItemFile to avoid type errors...
        value.file = value.file.replace(/\\/g, '/');
      }
    }
  }
  Object
    .entries(classes)
    .filter(([key, value]) => classes.hasOwnProperty(key))
    .forEach(([key, value]) => patchItemFile(value))
  classitems.forEach(patchItemFile);
}


function printLocalsHeader(emitter: Emitter, versionString: string) {
  emitter.lineComment(`Type definitions for p5 ${versionString}`);
  emitter.lineComment('Project: https://github.com/processing/p5.js');
  emitter.lineComment('Definitions by: p5-types <https://github.com/p5-types>');
  emitter.lineComment(
    'Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
  );
  emitter.lineComment('TypeScript Version: 4.9');
  emitter.emptyLine();
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
}

function relativeSafe(from: string, to: string) {
  const rel = path.relative(from, to);
  if (rel.length > 0) {
    return rel;
  }
  return './';
}


function indexRelative(baseDir: string, fileName: string) {
  const augmenterPath = path.joinSafe(baseDir, fileName);
  const baseRel = relativeSafe(path.dirname(augmenterPath), baseDir);
  return path.joinSafe(baseRel, 'index');
}


function printClassHeader(emitter: Emitter, prettyClassname: string, definition: analyze.DefinitionAST) {
  emitter.emit(
    `class ${prettyClassname}${definition.extends
      ? ` extends ${formatters.basicUnqualifiedP5(definition.extends)}`
      : ''
    } {`
  );
  emitter.indent();
}

function printClassFooter(emitter: Emitter) {
  emitter.dedent();
  emitter.emit('}');
}

function position(file: PathLike, line: number) {
  return `${file}, line ${line}`;
}

function classitemPosition(classitem: YUIDocsClassitem) {
  return position(classitem.file, classitem.line);
}


function overloadPosition(classitem: HasFile, overload: Overloadish) {
  return position(classitem.file, overload.line);
}


function formatTypedParams(params: YUIDocsParam[], typedParams: Map<string, TranslatedType[]>, formatType: TypeFormatter) {
  return params
    .map(param => {
      let name = param.name;
      if (name === 'class') {
        name = 'theClass';
      }

      const types = typedParams.get(param.name);

      if (param.optional) {
        let noUndefined = types.filter(type => {
          if (type.type === 'basic') {
            return type.value !== 'undefined';
          }
          return true;
        });
        return `${name}?: ${formatType(noUndefined)}`;
      }

      return `${name}: ${formatType(types)}`;
    })
    .join(', ');
}


function printOverloadErrors(
  emitter: Emitter,
  logger: Logger,
  classitem: Methodish,
  overload: Overloadish,
  decl: string,
  errors: string[]
) {
  emitter.sectionBreak();
  emitter.lineComment(
    `TODO: Fix ${classitem.name}() errors in ${overloadPosition(
      classitem,
      overload
    )}:`
  );
  emitter.emptyLineComment();
  errors.forEach(function (error) {
    logger(
      `${classitem.name}() ${overloadPosition(classitem, overload)}, ${error}`
    );
    emitter.lineComment(`   ${error}`);
  });
  emitter.emptyLineComment();
  emitter.lineComment(decl);
  emitter.emptyLine();
}


function printClassConstructor(
  emitter: Emitter,
  logger: Logger,
  formatType: TypeFormatter,
  definition: analyze.DefinitionAST,
  formatDecl: (formattedParams: string) => string
) {
  const theConstructor = definition._constructor;
  if (theConstructor) {
    const params = theConstructor.overload.params || [];
    const typedParams = theConstructor.typedParams;
    const decl = formatDecl(formatTypedParams(params, typedParams, formatType));
    if (theConstructor.errors.length > 0) {
      printOverloadErrors(
        emitter,
        logger,
        theConstructor.classitem,
        theConstructor.overload,
        decl,
        theConstructor.errors
      );
    } else {
      emitter.itemDescription(
        theConstructor.classitem,
        theConstructor.overload
      );
      emitter.emit(decl);
    }
  }
}


function printDescription(emitter: Emitter, lines: string[]) {
  if (lines.length === 0) {
    return;
  }
  emitter.sectionBreak();
  emitter.emit('/**');
  for (const line of lines) {
    emitter.emitDescription(line);
  }
  emitter.emit(' */');
}


function printMethodDescription(emitter: Emitter, methodDescription?: MethodDescription) {
  if (!methodDescription) {
    return;
  }

  const lines = [methodDescription.description];
  for (const param of methodDescription.params) {
    let name = param.name;
    if (param.optional) {
      name = `[${name}]`;
    }
    lines.push(`@param ${name} ${param.description}`);
  }
  if (methodDescription.chainable) {
    lines.push('@chainable');
  } else if (methodDescription.returns) {
    lines.push(`@return ${methodDescription.returns}`);
  }

  printDescription(emitter, lines);
}

function printMethod(emitter: Emitter, logger: Logger, formatMethod: MethodFormatter, formatType: TypeFormatter, method: ProcessedCategorizedMethod) {
  const name = method.name;
  const description = method.description;
  const checked = method.checked;
  const formattedParams = formatTypedParams(
    method.params,
    checked.typedParams,
    formatType
  );
  const formattedReturn = formatType(checked.returnType);
  const errors = checked.errors;
  const decl = formatMethod(name, formattedParams, formattedReturn);
  if (errors.length > 0) {
    printOverloadErrors(
      emitter,
      logger,
      checked.classitem,
      checked.overload,
      decl,
      errors
    );
  } else {
    printMethodDescription(emitter, description);
    emitter.emit(decl);
  }
}


function printProperty(emitter: Emitter, formatProperty: PropertyFormatter, formatType: TypeFormatter, property: ProcessedCategorizedProperty) {
  if (property.description) {
    printDescription(emitter, [property.description]);
  }
  const decl = `${property.name}: ${formatType(property.type)}`;
  emitter.emit(formatProperty(!!property.final, decl));
}


function printClassitems(emitter: Emitter, logger: Logger, formatter: ClassitemFormatter, items: analyze.ProcessedCategorizedClassitems) {
  // TODO: There should not be ?. but I don't know how to fix this.
  if (items.staticMethods?.length > 0) {
    formatter.beginStatic();
    for (const sm of items.staticMethods) {
      printMethod(
        emitter,
        logger,
        formatter.formatStaticMethod,
        formatter.formatType,
        sm
      );
    }
    formatter.endStatic();
  }
  const instanceItems =
    items.instanceMethods.length +
    items.properties.length +
    items.invalidProperties.length;
  if (instanceItems > 0) {
    formatter.beginInstance();
    for (const im of items.instanceMethods) {
      printMethod(
        emitter,
        logger,
        formatter.formatInstanceMethod,
        formatter.formatType,
        im
      );
    }
    for (const p of items.properties) {
      printProperty(
        emitter,
        formatter.formatInstanceProperty,
        formatter.formatType,
        p
      );
    }
    for (const p of items.invalidProperties) {
      emitter.sectionBreak();
      if (p.type === 'invalid-name') {
        emitter.lineComment(
          `TODO: Property "${p.value.name}", defined in ${classitemPosition(
            p.value
          )}, is not a valid JS symbol name`
        );
      } else {
        emitter.lineComment(
          `TODO: Property "${p.value.name}", defined in ${classitemPosition(
            p.value
          )}, has an invalid type: ${p.value.type}`
        );
      }
      emitter.sectionBreak();
    }
    formatter.endInstance();
  }
}


function declBody(name: string, params: string, returns: string) {
  return `${name}(${params}): ${returns}`;
}


function printFileBody(emitter: Emitter, logger: Logger, formatType: TypeFormatter, file: analyze.FileAST) {
  for (const item of file.definitions.items) {
    let prettyClassname = item[0].match(P5.CLASS_RE)[1];
    if (prettyClassname === 'Graphics') {
      prettyClassname = GRAPHICS_WORKAROUND_NAME;
      emitter.lineComment(
        'Work-around for p5.Graphics inheriting from both p5 and p5.Element'
      );
    }
    const definition = item[1];
    printClassHeader(emitter, prettyClassname, definition);
    printClassConstructor(
      emitter,
      logger,
      formatType,
      definition,
      params => `constructor(${params});`
    );
    printClassitems(
      emitter,
      logger,
      formatters.definitions,
      definition.processed
    );
    printClassFooter(emitter);
    if (prettyClassname === GRAPHICS_WORKAROUND_NAME) {
      emitter.lineComment(
        'Work-around for p5.Graphics inheriting from both p5 and p5.Element'
      );
      emitter.emit(`type Graphics = ${GRAPHICS_WORKAROUND_NAME} & p5;`);
    }
  }

  for (const item of file.augmentations.items) {
    const className = item[0];
    let prettyClassname;
    if (P5.ALIASES.includes(className)) {
      prettyClassname = 'p5InstanceExtensions';
    } else {
      prettyClassname = className.match(P5.CLASS_RE)[1];
    }
    const augmentation = item[1];
    printClassitems(
      emitter,
      logger,
      {
        beginInstance: () => {
          emitter.emit(`interface ${prettyClassname} {`);
          emitter.indent();
        },
        formatInstanceMethod: declBody,
        formatInstanceProperty: (final, decl) => {
          const modifier = final ? 'readonly ' : '';
          return `${modifier}${decl}`;
        },
        endInstance: () => {
          emitter.dedent();
          emitter.emit('}');
        },
        beginStatic: () => {
          emitter.emit(`namespace ${prettyClassname} {`);
          emitter.indent();
        },
        endStatic: () => {
          emitter.emit('}');
          emitter.dedent();
        },
        formatStaticMethod: (name, params, returns) =>
          `function ${declBody(name, params, returns)}`,
        formatType: formatters.definitions.formatType
      },
      augmentation.processed
    );
  }
}


function printFile(emitter: Emitter, logger: Logger, file: analyze.FileAST, indexRel: string) {
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
  emitter.emptyLine();
  emitter.emit(`import * as p5 from '${indexRel}'`);
  emitter.emptyLine();
  emitter.emit(`declare module '${indexRel}' {`);
  emitter.indent();

  printFileBody(emitter, logger, formatters.definitions.formatType, file);

  emitter.dedent();
  emitter.emit('}');
}


function printCore(emitter: Emitter, logger: Logger, file: analyze.FileAST) {
  emitter.emit('export = p5;');
  emitter.emit('declare class p5 {');
  emitter.indent();
  const definitions = file.definitions.items;
  const p5 = definitions.get('p5');
  const formatType = formatters.definitions.formatType;
  printClassConstructor(
    emitter,
    logger,
    formatType,
    p5,
    params => `constructor(${params});`
  );
  printClassitems(emitter, logger, formatters.definitions, p5.processed);
  emitter.dedent();
  emitter.emit('}');
  emitter.emptyLine();

  definitions.delete('p5');

  emitter.lineComment('tslint:disable-next-line:no-empty-interface');
  emitter.emit('interface p5 extends p5.p5InstanceExtensions {}');
  emitter.emptyLine();
  emitter.emit('declare namespace p5 {');
  emitter.indent();
  emitter.emit('type UNKNOWN_P5_CONSTANT = any;');
  emitter.lineComment('tslint:disable-next-line:no-empty-interface');
  emitter.emit('interface p5InstanceExtensions {}');
  printFileBody(emitter, logger, formatType, file);
  emitter.dedent();
  emitter.emit('}');
}


function printAugmentationReferences(emitter: Emitter, files: ItemCache<analyze.FileAST>, mainFile: string) {
  for (const fileName of files.items.keys()) {
    if (fileName.startsWith('src/') && fileName !== mainFile) {
      const relname = path.joinSafe('./', fileName);
      emitter.referencePath(`${relname}.d.ts`);
    }
  }
}


function printGlobalsHeader(emitter: Emitter) {
  emitter.lineComment('Global mode type definitions for p5');
  emitter.emptyLine();
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
  emitter.emptyLine();

  emitter.referencePath('./lib/addons/p5.sound.d.ts');
  emitter.emit(`import * as p5 from './index'`);
  emitter.emit('declare global {');
  emitter.indent();
}


function printGlobalsBody(emitter: Emitter, logger: Logger, files: ItemCache<analyze.FileAST>) {
  for (const file of files.items.values()) {
    for (const className of P5.ALIASES) {
      const definition = file.definitions.get(className);
      const augmentation = file.augmentations.get(className);
      if (definition) {
        printClassitems(
          emitter,
          logger,
          formatters.globals,
          definition.processed
        );
      }
      if (augmentation) {
        printClassitems(
          emitter,
          logger,
          formatters.globals,
          augmentation.processed
        );
      }
    }
  }
}


function printGlobalsFooter(emitter: Emitter) {
  emitter.dedent();
  emitter.emit('}');
}


function printGlobals(emitter: Emitter, logger: Logger, files: ItemCache<analyze.FileAST>) {
  printGlobalsHeader(emitter);
  printGlobalsBody(emitter, logger, files);
  printGlobalsFooter(emitter);
}

function printLiterals(emitter: Emitter, literals: Map<string, string>) {
  emitter.emit(`import * as p5 from './index'`);
  emitter.emptyLine();
  emitter.emit(`declare module './index' {`);
  emitter.indent();
  const sortedLiterals = Array.from(literals).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const item of sortedLiterals) {
    const name = item[0];
    const value = item[1];
    emitter.emit(`type ${name} = ${value};`);
  }
  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}


function printConstants(emitter: Emitter, constants: Map<string, RegExpExecArray[]>) {
  emitter.emit(`import * as p5 from './index'`);
  emitter.emptyLine();
  emitter.emit(`declare module './index' {`);
  emitter.indent();

  const sortedConstants = Array.from(constants).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const item of sortedConstants) {
    const name = item[0];
    const values = item[1];
    emitter.sectionBreak();
    emitter.emit(`type ${name} =`);
    emitter.indent();
    values.forEach(function (v, i) {
      let str = `${i ? '|' : ' '} ${v}`;
      if (i === values.length - 1) {
        str += ';';
      }
      emitter.emit(str);
    });
    emitter.dedent();
  }

  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}


function emit(outdir: string, logger: Logger, ast: analyze.DefinitionsAST) {
  const localFilename = path.joinSafe(outdir, 'index.d.ts');
  const globalFilename = path.joinSafe(outdir, 'global.d.ts');
  const literalsFilename = path.joinSafe(outdir, 'literals.d.ts');
  const constantsFilename = path.joinSafe(outdir, 'constants.d.ts');

  const localEmitter = new Emitter(localFilename);
  const globalEmitter = new Emitter(globalFilename);
  const literalsEmitter = new Emitter(literalsFilename);
  const constantsEmitter = new Emitter(constantsFilename);

  printLocalsHeader(localEmitter, ast.versionString);
  const files = ast.classes.files;
  files.items.delete('src/core/reference')
  printAugmentationReferences(localEmitter, files, ast.mainFile);
  localEmitter.referencePath('./literals.d.ts');
  localEmitter.referencePath('./constants.d.ts');

  printCore(localEmitter, logger, files.items.get(ast.mainFile));

  for (const item of files.items) {
    const fileName = item[0];
    if (fileName !== ast.mainFile) {
      const file = item[1];
      const emitter = new Emitter(path.joinSafe(outdir, `${fileName}.d.ts`));
      printFile(emitter, logger, file, indexRelative(outdir, fileName));
      emitter.close();
    }
  }

  printGlobals(globalEmitter, logger, files);
  printLiterals(literalsEmitter, ast.literals);
  printConstants(constantsEmitter, ast.constants);

  localEmitter.close();
  globalEmitter.close();
  literalsEmitter.close();
  constantsEmitter.close();

  for (const t of ast.classes.unknownClasses) {
    logger(`UNKNOWN CLASS: ${t}`);
  }

  for (const t of ast.classes.missingTypes) {
    logger(`MISSING: ${t}`);
  }
}

export const gta = (datajson: string, outdir: string) => {
  const yuidocs: YUIDocsData = JSON.parse(fs.readFileSync(datajson, 'utf8'));

  const logger = console.log;

  patchYUIDocs(yuidocs);

  const ast = new analyze.DefinitionsAST(yuidocs);
  emit(outdir, logger, ast);
}
