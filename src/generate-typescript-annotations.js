/// @ts-check

const Emitter = require('./emitter');
const types = require('./types');
const formatters = require('./formatters');
const fs = require('fs-extra');
const path = require('upath');
const semver = require('semver');

function position(file, line) {
  return file + ', line ' + line;
}

function classitemPosition(classitem) {
  return position(classitem.file, classitem.line);
}

function overloadPosition(classitem, overload) {
  return position(classitem.file, overload.line);
}

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
 * @param {string} filename
 * @returns {Emitter}
 */
function createAugmenter(baseDir, filename) {
  const augmenterPath = path.joinSafe(baseDir, `${filename}.d.ts`);
  const emitter = new Emitter(augmenterPath);

  const baseRel = relativeSafe(path.dirname(augmenterPath), baseDir);
  const indexRel = path.joinSafe(baseRel, 'index');

  emitter.emit(`import * as p5 from '${indexRel}'`);
  emitter.emit('');
  emitter.emit(`declare module '${indexRel}' {`);

  emitter.indent();

  return emitter;
}

function closeAugmenter(emitter) {
  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}

/**
 *
 * @param {Emitter} emitter
 */
function openP5Augmentation(emitter) {
  emitter.indent();
  emitter.emit('interface p5InstanceExtensions {');
}

/**
 *
 * @param {Emitter} emitter
 */
function closeP5Augmentation(emitter) {
  emitter.dedent();
  emitter.emit('}');
}

/**
 *
 * @param {*} classitem
 */
function patchClassitemFile(classitem) {
  classitem.file = classitem.file.replace(/\\/g, '/');
}

/**
 *
 * @param {*} classitem
 * @returns {string}
 */
function classitemFilename(classitem) {
  return definitionImportName(classitem.file);
}

function getVersionString(version) {
  try {
    return `${semver.major(version)}.${semver.minor(version)}`;
  } catch (_) {
    return '0.0';
  }
}

function definitionImportName(filename) {
  const dirname = path.dirname(filename);
  const name = path.basename(filename, '.js');
  return path.joinSafe(dirname, name);
}

/**
 *
 * @param {Emitter} emitter
 * @param {ItemCache} augmentersCache
 */
function generateAugmenterReferences(emitter, augmentersCache) {
  emitter.importAugmenter('./constants');
  emitter.importAugmenter('./literals');

  for (const key in augmentersCache.items) {
    if (augmentersCache.items.hasOwnProperty(key)) {
      closeAugmenter(augmentersCache.items[key]);
      // augmenters from src should be referenced (they are included by app.js)
      // augmenters from lib should not be referenced
      if (key.startsWith('src/')) {
        const relname = path.joinSafe('./', key);
        emitter.importAugmenter(relname);
      }
    }
  }
}

/**
 *
 * @param {string} outdir
 * @param {*} literals
 */
function emitLiterals(outdir, literals) {
  const emitter = new Emitter(path.joinSafe(outdir, 'literals.d.ts'));
  emitter.emit(`import * as p5 from './index'`);
  emitter.emit('');
  emitter.emit(`declare module './index' {`);
  emitter.indent();
  Object.keys(literals).forEach(function(key) {
    emitter.emit(`type ${key} = ${literals[key]};`);
  });
  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}

/**
 *
 * @param {string} outdir
 * @param {*} constants
 */
function emitConstants(outdir, constants) {
  const emitter = new Emitter(path.joinSafe(outdir, 'constants.d.ts'));
  emitter.emit(`import * as p5 from './index'`);
  emitter.emit('');
  emitter.emit(`declare module './index' {`);
  emitter.indent();

  Object.keys(constants).forEach(function(key) {
    const values = constants[key];

    emitter.sectionBreak();
    emitter.emit(`type ${key} =`);
    values.forEach(function(v, i) {
      let str = `${i ? '|' : ' '} ${v}`;
      if (i === values.length - 1) {
        str += ';';
      }
      emitter.emit(`    ${str}`);
    });
  });

  emitter.dedent();
  emitter.emit('}');
  emitter.close();
}

/**
 *
 * @template T item type in cache
 */
class ItemCache {
  /**
   *
   * @param {Factory} factory
   * @typedef {(name: string) => T} Factory
   * @typedef {Object.<string, T>} Items
   */
  constructor(factory) {
    /**
     * @type Items
     */
    this.items = {};
    this.factory = factory;
  }

  /**
   *
   * @param {string} name
   */
  get(name) {
    if (!this.items[name]) {
      this.items[name] = this.factory(name);
    }
    return this.items[name];
  }
}

class CategorizedClassitems {
  constructor() {
    this.instanceMethods = [];
    this.staticMethods = [];
    this.properties = [];
    this.missing = [];
  }
}

/**
 *
 * @param {Emitter} emitter
 */
function generateGlobalsHeader(emitter) {
  emitter.lineComment('Global mode type definitions for p5');
  emitter.emptyLine();
  emitter.lineComment('This file was auto-generated. Please do not edit it.');
  emitter.emptyLine();

  emitter.emit(`import * as p5 from './index';`);
  emitter.importAugmenter('./lib/addons/p5.dom');
  emitter.importAugmenter('./lib/addons/p5.sound');
}

/**
 *
 * @param {Emitter} emitter
 * @param {*} logger
 * @param {*} classitem
 * @param {*} overload
 * @param {string} decl
 * @param {string[]} errors
 */
function emitOverloadErrors(
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

function generateUnknownClass(emitter, classname) {
  emitter.emit(`type ${classname} = any;`);
}

/**
 *
 * @param {Emitter} emitter
 * @param {string} prettyClassname
 * @param {*} classitem
 */
function generateClassHeader(emitter, prettyClassname, classitem) {
  emitter.emit(
    `class ${prettyClassname}${
      classitem.extends ? ` extends ${classitem.extends}` : ''
    } {`
  );
  emitter.indent();
}

/**
 *
 * @param {Emitter} emitter
 */
function generateClassFooter(emitter) {
  emitter.dedent();
  emitter.emit('}');
}

// mod is used to make yuidocs "global". It actually just calls generate()
// This design was selected to avoid rewriting the whole file from
// https://github.com/toolness/friendly-error-fellowship/blob/2093aee2acc53f0885fcad252a170e17af19682a/experiments/typescript/generate-typescript-annotations.js
function mod(args) {
  const yuidocs = JSON.parse(fs.readFileSync(args.data, 'utf8'));
  const outdir = args.outdir;
  const localFilename = path.joinSafe(outdir, 'index.d.ts');
  const globalFilename = path.joinSafe(outdir, 'global.d.ts');
  const logger = args.logger || console.log;

  const constants = {};
  const literals = {};
  const missingTypes = {};
  const version = yuidocs.project.version;
  const versionString = getVersionString(version);

  const translateType = (type, defaultType) =>
    types.translateType(yuidocs, constants, missingTypes, type, defaultType);
  const validateType = type =>
    types.validateType(yuidocs, constants, missingTypes, type);

  // http://stackoverflow.com/a/2008353/2422398
  const JS_SYMBOL_RE = /^[$A-Z_][0-9A-Z_$]*$/i;

  const P5_CLASS_RE = /^p5\.([^.]+)$/;

  const P5_ALIASES = [
    'p5',
    // These are supposedly "classes" in our docs, but they don't exist
    // as objects, and their methods are all defined on p5.
    'p5.dom',
    'p5.sound'
  ];

  function getClassitems(className) {
    return yuidocs.classitems.filter(function(classitem) {
      // Note that we first find items with the right class name,
      // but we also check for classitem.name because
      // YUIDoc includes classitems that we want to be undocumented
      // just because we used block comments.
      // We have other checks in place for finding missing method names
      // on public methods so a missing classitem.name implies that
      // the method is undocumented on purpose.
      // See https://github.com/processing/p5.js/issues/1252 and
      // https://github.com/processing/p5.js/pull/2301
      return classitem.class === className && classitem.name;
    });
  }

  function validateMethod(classitem, overload) {
    const errors = [];
    const paramNames = {};
    let optionalParamFound = false;

    if (!(JS_SYMBOL_RE.test(classitem.name) || classitem.is_constructor)) {
      errors.push('"' + classitem.name + '" is not a valid JS symbol name');
    }

    (overload.params || []).forEach(function(param) {
      if (param.optional) {
        optionalParamFound = true;
      } else if (optionalParamFound) {
        errors.push(
          'required param "' + param.name + '" follows an ' + 'optional param'
        );
      }

      if (param.name in paramNames) {
        errors.push('param "' + param.name + '" is defined multiple times');
      }
      paramNames[param.name] = true;

      if (!JS_SYMBOL_RE.test(param.name)) {
        errors.push('param "' + param.name + '" is not a valid JS symbol name');
      }

      if (!validateType(param.type)) {
        errors.push(
          'param "' + param.name + '" has invalid type: ' + param.type
        );
      }
    });

    if (overload.return && !validateType(overload.return.type)) {
      errors.push('return has invalid type: ' + overload.return.type);
    }

    return errors;
  }

  function translateParam(param) {
    let name = param.name;
    if (name === 'class') {
      name = 'theClass';
    }

    const translated = translateType(param.type, 'any');
    if (param.optional) {
      return `${name}?: ${translated.filter(t => t !== 'undefined').join('|')}`;
    }

    return `${name}: ${translated.join('|')}`;
  }

  /**
   *
   * @param {Emitter} emitter
   * @param {Formatter} format
   * @param {*} classitem
   * @param {*} overload
   */
  function generateClassConstructorOverload(
    emitter,
    format,
    classitem,
    overload
  ) {
    types.populateConstantType(constants, classitem, overload);
    const params = (overload.params || []).map(translateParam);
    let decl = format.constructorOverload(params.join(', '));

    const errors = validateMethod(classitem, overload);
    if (errors.length) {
      emitOverloadErrors(emitter, logger, classitem, overload, decl, errors);
    } else {
      emitter.itemDescription(classitem, overload);
      emitter.emit(decl);
    }
  }

  /**
   *
   * @param {Emitter} emitter
   * @param {Formatter} format
   * @param {string} className
   */
  function generateClassConstructor(emitter, format, className) {
    const classitem = yuidocs.classes[className];
    if (classitem.is_constructor) {
      if (classitem.overloads) {
        classitem.overloads.forEach(function(overload) {
          generateClassConstructorOverload(
            emitter,
            format,
            classitem,
            overload
          );
        });
      } else {
        generateClassConstructorOverload(emitter, format, classitem, classitem);
      }
    }
  }

  function wrapLiteral(literal, isString) {
    if (isString) {
      return "'" + literal.replace(/'/g, "\\'") + "'";
    }
    return literal;
  }

  /**
   *
   * @param {ItemCache<ItemCache<CategorizedClassitems>>} categoriesCache
   * @param {string} className
   */
  function categorizeClassitems(categoriesCache, className) {
    getClassitems(className).forEach(function(classitem) {
      patchClassitemFile(classitem);
      const forFile = categoriesCache.get(classitemFilename(classitem));
      const categories = forFile.get(className);
      if (classitem.itemtype === 'method') {
        const overloads = classitem.overloads || [classitem];
        for (const overload of overloads) {
          types.populateConstantType(constants, classitem, overload);

          if (overload.static) {
            categories.staticMethods.push({
              classitem: classitem,
              overload: overload
            });
          } else {
            categories.instanceMethods.push({
              classitem: classitem,
              overload: overload
            });
          }
        }
      } else if (classitem.itemtype === 'property') {
        categories.properties.push(classitem);
      } else {
        categories.properties.push(classitem);
      }
    });
  }

  /**
   *
   * @param {string} className
   * @param {*} overload
   */
  function overloadReturnType(className, overload) {
    if (overload.chainable) {
      return className;
    }
    if (overload.return) {
      return translateType(overload.return.type, 'any').join('|');
    }
    return 'void';
  }

  /**
   * @param {Emitter} emitter
   * @param {string} className
   * @param {CategorizedClassitems} categories
   * @param {Formatter} format
   */
  function printClassitems(emitter, className, categories, format) {
    if (categories.staticMethods.length > 0) {
      emitter.emit(format.openStatic(className));

      for (const sm of categories.staticMethods) {
        const overload = sm.overload;
        const params = (overload.params || []).map(translateParam);
        const classitem = sm.classitem;
        const itemname = classitem.name;

        const decl = format.staticMethod(
          itemname,
          params,
          overloadReturnType(className, overload)
        );

        const errors = validateMethod(classitem, overload);
        if (errors.length) {
          emitOverloadErrors(
            emitter,
            logger,
            classitem,
            overload,
            decl,
            errors
          );
        } else {
          emitter.itemDescription(classitem, overload);
          emitter.emit(decl);
        }
      }

      emitter.emit(format.closeStatic(className));
    }
    const instanceItems =
      categories.instanceMethods.length + categories.properties.length;
    if (instanceItems > 0) {
      emitter.emit(format.openInstance(className));
    }

    for (const im of categories.instanceMethods) {
      const overload = im.overload;
      const params = (overload.params || []).map(translateParam);
      const classitem = im.classitem;
      const itemname = classitem.name;

      const decl = format.instanceMethod(
        itemname,
        params,
        overloadReturnType(className, overload)
      );

      const errors = validateMethod(classitem, overload);
      if (errors.length) {
        emitOverloadErrors(emitter, logger, classitem, overload, decl, errors);
      } else {
        emitter.itemDescription(classitem, overload);
        emitter.emit(decl);
      }
    }

    for (const classitem of categories.properties) {
      const itemName = classitem.name;
      if (JS_SYMBOL_RE.test(itemName)) {
        // TODO: It seems our properties don't carry any type information,
        // which is unfortunate. YUIDocs supports the @type tag on properties,
        // and even encourages using it, but we don't seem to use it.
        const translatedType = translateType(classitem.type, 'any');
        let defaultValue = classitem.default;

        const typeIsString =
          translatedType.length === 1 && translatedType[0] === 'string';

        if (classitem.final && typeIsString && !defaultValue) {
          defaultValue = itemName.toLowerCase().replace(/_/g, '-');
        }

        let decl;
        if (defaultValue) {
          decl = `${itemName}: p5.${itemName}`;

          literals[itemName] = wrapLiteral(defaultValue, typeIsString);
        } else {
          decl = itemName + ': ' + translatedType.join('|');
        }

        emitter.itemDescription(classitem);

        emitter.emit(format.property(classitem.final, decl));
      } else {
        emitter.sectionBreak();
        emitter.lineComment(
          `TODO: Property "${itemName}", defined in ${classitemPosition(
            classitem
          )}, is not a valid JS symbol name`
        );
        emitter.sectionBreak();
      }
    }

    if (instanceItems > 0) {
      emitter.emit(format.closeInstance(className));
    }

    for (const classitem of categories.missing) {
      emitter.lineComment(
        `TODO: Annotate ${classitem.itemtype} "${
          classitem.name
        }", defined in ${classitemPosition(classitem)}`
      );
    }
  }

  function generateLocalsHeader(emitter) {
    emitter.lineComment(`Type definitions for p5 ${versionString}`);
    emitter.lineComment('Project: https://github.com/processing/p5.js');
    emitter.lineComment(
      'Definitions by: p5-types <https://github.com/p5-types>'
    );
    emitter.lineComment(
      'Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
    );
    emitter.lineComment('TypeScript Version: 2.4');
    emitter.emptyLine();
    emitter.lineComment('This file was auto-generated. Please do not edit it.');
    emitter.emptyLine();
  }

  function generateClassBody(emitter, format, className) {
    const nestedClassName = className.match(P5_CLASS_RE)[1];
    const classitem = yuidocs.classes[className];
    generateClassHeader(emitter, nestedClassName, classitem);
    generateClassConstructor(emitter, format, className);
    generateClassFooter(emitter);
  }

  function generatep5ExtensionsInterface(emitter) {
    emitter.lineComment('tslint:disable-next-line:no-empty-interface');
    emitter.emit('interface p5InstanceExtensions {}');
  }

  function generatep5ClassHeader(emitter) {
    emitter.emit('declare class p5 {');
  }

  function generatep5ClassFooter(emitter) {
    emitter.emit('}');
    emitter.lineComment('tslint:disable-next-line:no-empty-interface');
    emitter.emit('interface p5 extends p5.p5InstanceExtensions {}');
  }

  /**
   *
   * @param {*} unknownClasses
   * @param {*} emitter
   * @param {*} p5Aliases
   * @param {*} p5Subclasses
   */
  function generateLocalsBody(
    unknownClasses,
    emitter,
    p5Aliases,
    p5Subclasses
  ) {
    emitter.emit('export = p5;');
    unknownClasses.forEach(classname =>
      generateUnknownClass(emitter, classname)
    );

    generatep5ClassHeader(emitter);
    p5Aliases.forEach(className =>
      generateClassConstructor(emitter, formatters.locals, className)
    );
    generatep5ClassFooter(emitter);

    emitter.emit('declare namespace p5 {');
    emitter.indent();

    emitter.emit('type UNKNOWN_P5_CONSTANT = any;');
    generatep5ExtensionsInterface(emitter);

    p5Subclasses.forEach(className =>
      generateClassBody(emitter, formatters.locals, className)
    );

    emitter.dedent();
    emitter.emit('}');
  }

  /**
   * @param {Emitter} emitter
   * @param {ItemCache<CategorizedClassitems>} categoriesCache
   */
  function printP5Augmentation(emitter, categoriesCache) {
    openP5Augmentation(emitter);
    for (const className in categoriesCache.items) {
      if (categoriesCache.items.hasOwnProperty(className)) {
        /**
         * @type {*}
         */
        const categories = categoriesCache.items[className];
        const formatter = Object.assign({}, formatters.locals, {
          openInstance: () => '',
          closeInstance: () => ''
        });

        printClassitems(emitter, className, categories, formatter);
      }
    }
    closeP5Augmentation(emitter);
  }

  /**
   * @param {Emitter} emitter
   * @param {ItemCache<CategorizedClassitems>} categoriesCache
   */
  function printClassAugmentation(emitter, categoriesCache) {
    for (const className in categoriesCache.items) {
      if (categoriesCache.items.hasOwnProperty(className)) {
        /**
         * @type {*}
         */
        const categories = categoriesCache.items[className];
        const formatter = Object.assign({}, formatters.locals, {
          openInstance: className =>
            formatters.locals.openInstance(className.match(P5_CLASS_RE)[1]),
          openStatic: className =>
            formatters.locals.openStatic(className.match(P5_CLASS_RE)[1])
        });
        printClassitems(emitter, className, categories, formatter);
      }
    }
  }

  /**
   * @param {Emitter} emitter
   * @param {ItemCache<CategorizedClassitems>} categoriesCache
   */
  function printP5GlobalProperties(emitter, categoriesCache) {
    for (const className in categoriesCache.items) {
      if (categoriesCache.items.hasOwnProperty(className)) {
        /**
         * @type {*}
         */
        const categories = categoriesCache.items[className];
        printClassitems(emitter, className, categories, formatters.globals);
      }
    }
  }

  function generate() {
    const p5Aliases = [];
    const p5Subclasses = [];
    const unknownClasses = [];

    logger('Generating definitions...');

    Object.keys(yuidocs.classes).forEach(function(className) {
      if (P5_ALIASES.indexOf(className) !== -1) {
        p5Aliases.push(className);
      } else if (P5_CLASS_RE.test(className)) {
        p5Subclasses.push(className);
      } else {
        unknownClasses.push(className);
      }
    });

    logger(`Emitting local definitions...`);

    const localEmitter = new Emitter(localFilename);

    generateLocalsHeader(localEmitter);

    const p5AliasCategories = new ItemCache(
      filename => new ItemCache(className => new CategorizedClassitems())
    );

    for (const className of p5Aliases) {
      categorizeClassitems(p5AliasCategories, className);
    }

    const subclassCategories = new ItemCache(
      filename => new ItemCache(className => new CategorizedClassitems())
    );

    for (const className of p5Subclasses) {
      categorizeClassitems(subclassCategories, className);
    }

    const augmentersCache = new ItemCache(name =>
      createAugmenter(outdir, name)
    );

    for (const filename in p5AliasCategories.items) {
      if (p5AliasCategories.items.hasOwnProperty(filename)) {
        const augmenter = augmentersCache.get(filename);

        /**
         * @type {*}
         */
        const categoriesCache = p5AliasCategories.items[filename];
        printP5Augmentation(augmenter, categoriesCache);
      }
    }

    for (const filename in subclassCategories.items) {
      if (subclassCategories.items.hasOwnProperty(filename)) {
        const augmenter = augmentersCache.get(filename);

        /**
         * @type {*}
         */
        const categoriesCache = subclassCategories.items[filename];
        printClassAugmentation(augmenter, categoriesCache);
      }
    }

    // Emit globals for a while, then finish with emitting (shared) literals and constants
    logger(`Emitting global definitions...`);

    const globalEmitter = new Emitter(globalFilename);

    generateGlobalsHeader(globalEmitter);

    globalEmitter.emit('declare global {');
    globalEmitter.indent();

    p5Aliases.forEach(className => {
      generateClassConstructor(globalEmitter, formatters.globals, className);
      for (const filename in p5AliasCategories.items) {
        if (p5AliasCategories.items.hasOwnProperty(filename)) {
          /**
           * @type {*}
           */
          const categoriesCache = p5AliasCategories.items[filename];
          globalEmitter.lineComment(filename);
          printP5GlobalProperties(globalEmitter, categoriesCache);
        }
      }
    });
    globalEmitter.dedent();
    globalEmitter.emit('}');

    globalEmitter.close();

    generateAugmenterReferences(localEmitter, augmentersCache);
    generateLocalsBody(unknownClasses, localEmitter, p5Aliases, p5Subclasses);

    localEmitter.close();

    emitLiterals(outdir, literals);
    emitConstants(outdir, constants);

    let missing = false;
    for (const t of unknownClasses) {
      logger(`UNKNOWN CLASS: ${t}`);
      missing = true;
    }
    for (const t in missingTypes) {
      logger(`MISSING: ${t}`);
      missing = true;
    }

    if (!missing) {
      logger('Generated without errors');
    }
  }

  generate();
}

module.exports = mod;
