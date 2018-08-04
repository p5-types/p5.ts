/// @ts-check

/// <reference path="./generate-typescript-annotations_.d.ts" />
/// <reference path="./data.d.ts" />

const fs = require('fs-extra');
const path = require('upath');

const Emitter = require('./emitter');
// eslint-disable-next-line no-unused-vars
const ItemCache = require('./itemcache');
const analyze = require('./analyze-data');
const P5 = require('./p5_classes');
const formatters = require('./formatters');

/**
 *
 * @param {HasFile} classitem
 */
function patchItemFile(classitem) {
  classitem.file = classitem.file.replace(/\\/g, '/');
}

/**
 *
 * @param {YUIDocsData} yuidocs
 */
function patchYUIDocs(yuidocs) {
  delete yuidocs.classes['p5.sound'];
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
  for (const key in classes) {
    if (classes.hasOwnProperty(key)) {
      patchItemFile(classes[key]);
    }
  }
  classitems.forEach(patchItemFile);
}

/**
 *
 * @param {Emitter} emitter
 * @param {string} versionString
 */
function printLocalsHeader(emitter, versionString) {
  emitter.lineComment(`Type definitions for p5 ${versionString}`);
  emitter.lineComment('Project: https://github.com/processing/p5.js');
  emitter.lineComment('Definitions by: p5-types <https://github.com/p5-types>');
  emitter.lineComment(
    'Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
  );
  emitter.lineComment('TypeScript Version: 2.4');
  emitter.emptyLine();
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
  emitter.emptyLine();
}

/**
 *
 * @param {string} from
 * @param {string} to
 */
function relativeSafe(from, to) {
  const rel = path.relative(from, to);
  if (rel.length > 0) {
    return rel;
  }
  return './';
}

/**
 *
 * @param {string} baseDir
 * @param {string} fileName
 */
function indexRelative(baseDir, fileName) {
  const augmenterPath = path.joinSafe(baseDir, fileName);
  const baseRel = relativeSafe(path.dirname(augmenterPath), baseDir);
  return path.joinSafe(baseRel, 'index');
}

/**
 *
 * @param {Emitter} emitter
 * @param {string} prettyClassname
 * @param {analyze.DefinitionAST} definition
 */
function printClassHeader(emitter, prettyClassname, definition) {
  emitter.emit(
    `class ${prettyClassname}${
      definition.extends ? ` extends ${definition.extends}` : ''
    } {`
  );
  emitter.indent();
}

/**
 *
 * @param {Emitter} emitter
 */
function printClassFooter(emitter) {
  emitter.dedent();
  emitter.emit('}');
}

function position(file, line) {
  return file + ', line ' + line;
}

/**
 *
 * @param {YUIDocsClassitem} classitem
 */
function classitemPosition(classitem) {
  return position(classitem.file, classitem.line);
}

/**
 *
 * @param {HasFile} classitem
 * @param {Overloadish} overload
 */
function overloadPosition(classitem, overload) {
  return position(classitem.file, overload.line);
}

/**
 *
 * @param {TranslatedFunctionParam} param
 */
function formatFunctionParam(param) {
  return `${param.name}: ${formatType(param.paramType)}`;
}

/**
 *
 * @param {TranslatedType[]} types
 */
function formatType(types) {
  return types
    .map(type => {
      if (type.type === 'basic') {
        return type.value;
      }
      if (type.type === 'function') {
        return `(${type.params.map(formatFunctionParam).join(', ')}) => any`;
      }
      if (type.type === 'array') {
        return `${formatType(type.value)}[]`;
      }
    })
    .join('|');
}

/**
 *
 * @param {YUIDocsParam[]} params
 * @param {Map<string, TranslatedType[]>} typedParams
 */
function formatTypedParams(params, typedParams) {
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

      return `${name}?: ${formatType(types)}`;
    })
    .join(', ');
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {Methodish} classitem
 * @param {Overloadish} overload
 * @param {string} decl
 * @param {string[]} errors
 */
function printOverloadErrors(
  emitter,
  logger,
  classitem,
  overload,
  decl,
  errors
) {
  emitter.sectionBreak();
  emitter.lineComment(
    `TODO: Fix ${classitem.name}() errors in ${overloadPosition(
      classitem,
      overload
    )}:`
  );
  emitter.emptyLineComment();
  errors.forEach(function(error) {
    logger(
      `${classitem.name}() ${overloadPosition(classitem, overload)}, ${error}`
    );
    emitter.lineComment(`   ${error}`);
  });
  emitter.emptyLineComment();
  emitter.lineComment(decl);
  emitter.emptyLine();
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {analyze.DefinitionAST} definition
 * @param {(formattedParams: string) => string} formatDecl
 */
function printClassConstructor(emitter, logger, definition, formatDecl) {
  const theConstructor = definition.constructor;
  if (theConstructor) {
    const params = theConstructor.overload.params || [];
    const typedParams = theConstructor.typedParams;
    const decl = formatDecl(formatTypedParams(params, typedParams));
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

/**
 *
 * @param {Emitter} emitter
 * @param {string[]} lines
 */
function printDescription(emitter, lines) {
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

/**
 *
 * @param {Emitter} emitter
 * @param {MethodDescription | undefined} methodDescription
 */
function printMethodDescription(emitter, methodDescription) {
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

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {MethodFormatter} formatter
 * @param {ProcessedCategorizedMethod} method
 */
function printMethod(emitter, logger, formatter, method) {
  const name = method.name;
  const description = method.description;
  const checked = method.checked;
  const formattedParams = formatTypedParams(method.params, checked.typedParams);
  const formattedReturn = formatType(checked.returnType);
  const errors = checked.errors;
  const decl = formatter(name, formattedParams, formattedReturn);
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

/**
 *
 * @param {Emitter} emitter
 * @param {PropertyFormatter} formatter
 * @param {ProcessedCategorizedProperty} property
 */
function printProperty(emitter, formatter, property) {
  if (property.description) {
    printDescription(emitter, [property.description]);
  }
  const decl = `${property.name}: ${formatType(property.type)}`;
  emitter.emit(formatter(!!property.final, decl));
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {ClassitemFormatter} formatter
 * @param {analyze.ProcessedCategorizedClassitems} items
 */
function printClassitems(emitter, logger, formatter, items) {
  if (items.staticMethods.length > 0) {
    formatter.beginStatic();
    for (const sm of items.staticMethods) {
      printMethod(emitter, logger, formatter.formatStaticMethod, sm);
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
      printMethod(emitter, logger, formatter.formatInstanceMethod, im);
    }
    for (const p of items.properties) {
      printProperty(emitter, formatter.formatInstanceProperty, p);
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

/**
 *
 * @param {string} name
 * @param {string} params
 * @param {string} returns
 */
function declBody(name, params, returns) {
  return `${name}(${params}): ${returns}`;
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {analyze.FileAST} file
 */
function printFileBody(emitter, logger, file) {
  for (const item of file.definitions.items) {
    const prettyClassname = item[0].match(P5.CLASS_RE)[1];
    const definition = item[1];
    printClassHeader(emitter, prettyClassname, definition);
    printClassConstructor(
      emitter,
      logger,
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
  }

  for (const item of file.augmentations.items) {
    const className = item[0];
    let prettyClassname;
    if (P5.ALIASES.indexOf(className) !== -1) {
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
          `function ${declBody(name, params, returns)}`
      },
      augmentation.processed
    );
  }
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {analyze.FileAST} file
 * @param {string} indexRel
 */
function printFile(emitter, logger, file, indexRel) {
  emitter.emit(`import * as p5 from '${indexRel}'`);
  emitter.emptyLine();
  emitter.emit(`declare module '${indexRel}' {`);
  emitter.indent();

  printFileBody(emitter, logger, file);

  emitter.dedent();
  emitter.emit('}');
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {analyze.FileAST} file
 */
function printCore(emitter, logger, file) {
  emitter.emit('export = p5;');
  emitter.emit('declare class p5 {');
  emitter.indent();
  const definitions = file.definitions.items;
  const p5 = definitions.get('p5');
  printClassConstructor(
    emitter,
    logger,
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
  printFileBody(emitter, logger, file);
  emitter.dedent();
  emitter.emit('}');
}

/**
 *
 * @param {Emitter} emitter
 * @param {ItemCache<analyze.FileAST>} files
 */
function printAugmentationReferences(emitter, files) {
  for (const fileName of files.items.keys()) {
    if (fileName.startsWith('src/') && fileName !== 'src/core/core') {
      const relname = path.joinSafe('./', fileName);
      emitter.referencePath(`${relname}.d.ts`);
    }
  }
}

/**
 *
 * @param {Emitter} emitter
 */
function printGlobalsHeader(emitter) {
  emitter.lineComment('Global mode type definitions for p5');
  emitter.emptyLine();
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
  emitter.emptyLine();

  emitter.referencePath('./lib/addons/p5.dom.d.ts');
  emitter.referencePath('./lib/addons/p5.sound.d.ts');
  emitter.emit(`import * as p5 from './index'`);
  emitter.emit('declare global {');
  emitter.indent();
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {ItemCache<analyze.FileAST>} files
 */
function printGlobalsBody(emitter, logger, files) {
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

/**
 *
 * @param {Emitter} emitter
 */
function printGlobalsFooter(emitter) {
  emitter.dedent();
  emitter.emit('}');
}

/**
 *
 * @param {Emitter} emitter
 * @param {Logger} logger
 * @param {ItemCache<analyze.FileAST>} files
 */
function printGlobals(emitter, logger, files) {
  printGlobalsHeader(emitter);
  printGlobalsBody(emitter, logger, files);
  printGlobalsFooter(emitter);
}

/**
 *
 * @param {Emitter} emitter
 * @param {Map<string, string>} literals
 */
function printLiterals(emitter, literals) {
  emitter.emit(`import * as p5 from './index'`);
  emitter.emptyLine();
  emitter.emit(`declare module './index' {`);
  emitter.indent();
  for (const item of literals) {
    const name = item[0];
    const value = item[1];
    emitter.emit(`type ${name} = ${value};`);
  }
  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}

/**
 *
 * @param {Emitter} emitter
 * @param {Map<string, RegExpExecArray[]>} constants
 */
function printConstants(emitter, constants) {
  emitter.emit(`import * as p5 from './index'`);
  emitter.emptyLine();
  emitter.emit(`declare module './index' {`);
  emitter.indent();

  for (const item of constants) {
    const name = item[0];
    const values = item[1];
    emitter.sectionBreak();
    emitter.emit(`type ${name} =`);
    emitter.indent();
    values.forEach(function(v, i) {
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

/**
 *
 * @param {string} outdir
 * @param {Logger} logger
 * @param {analyze.DefinitionsAST} ast
 */
function emit(outdir, logger, ast) {
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
  printAugmentationReferences(localEmitter, files);
  localEmitter.referencePath('./literals.d.ts');
  localEmitter.referencePath('./constants.d.ts');

  printCore(localEmitter, logger, files.items.get('src/core/core'));

  for (const item of files.items) {
    const fileName = item[0];
    if (fileName !== 'src/core/core') {
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
}

/**
 *
 * @param {GtaArgs} args
 */
function gta(args) {
  /**
   * @type{YUIDocsData}
   */
  const yuidocs = JSON.parse(fs.readFileSync(args.data, 'utf8'));
  const outdir = args.outdir;

  const logger = args.logger || console.log;

  patchYUIDocs(yuidocs);

  const ast = new analyze.DefinitionsAST(yuidocs);
  emit(outdir, logger, ast);
}

module.exports = gta;
