/// @ts-check
const Emitter = require('./emitter');
const types = require('./types');
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
  const emitter = new Emitter(path.joinSafe(baseDir, filename));
  const augmenterPath = path.joinSafe(baseDir, filename);

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

function openP5Augmentation(emitter) {
  emitter.indent();
  emitter.emit('interface p5InstanceExtensions {');
}

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
  return definitionFilename(classitem.file);
}

const formatLocals = {
  constructor: params => `constructor(${params});`,
  method: decl => decl,
  property: (final, decl) => {
    const modifier = final ? 'readonly ' : '';
    return `${modifier}${decl};`;
  }
};

const formatGlobals = {
  constructor: params => `p5(${params}): p5;`,
  method: decl => `function ${decl}`,
  property: (final, decl) => {
    const declarationType = final ? 'const' : 'let';
    return `${declarationType} ${decl};`;
  }
};

function getVersionString(version) {
  try {
    return `${semver.major(version)}.${semver.minor(version)}`;
  } catch (_) {
    return '0.0';
  }
}

function definitionFilename(filename) {
  const dirname = path.dirname(filename);
  const name = path.basename(filename, '.js');
  return path.joinSafe(dirname, `${name}.d.ts`);
}

/**
 *
 * @param {Emitter} emitter
 * @param {AugmentersCache} augmentersCache
 */
function generateAugmenterReferences(emitter, augmentersCache) {
  emitter.referencePath('./constants.d.ts');
  emitter.referencePath('./literals.d.ts');

  for (const key in augmentersCache.augmenters) {
    if (augmentersCache.augmenters.hasOwnProperty(key)) {
      closeAugmenter(augmentersCache.augmenters[key]);
      // augmenters from src should be referenced (they are included by app.js)
      // augmenters from lib should not be referenced
      if (key.startsWith('src/')) {
        const relname = path.joinSafe('./', key);
        emitter.referencePath(relname);
      }
    }
  }
}

class AugmentersCache {
  constructor(factory) {
    /**
     * @type {Object.<string, Emitter>}
     */
    this.augmenters = {};
    this.factory = factory;
  }

  /**
   *
   * @param {string} name
   */
  get(name) {
    if (!this.augmenters[name]) {
      this.augmenters[name] = this.factory(name);
    }
    return this.augmenters[name];
  }
}

/**
 *
 * @param {Emitter} emitter
 */
function generateGlobalsHeader(emitter) {
  emitter.emit(`// Global mode type definitions for p5`);

  emitter.emit('\n// This file was auto-generated. Please do not edit it.\n');

  emitter.emit(`import * as p5 from './index';`);
  emitter.referencePath('./lib/addons/p5.dom.d.ts');
  emitter.referencePath('./lib/addons/p5.sound.d.ts');
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
   * @param {*} format
   * @param {string} className
   * @param {*} classitem
   */
  function generateClassMethod(emitter, format, className, classitem) {
    if (classitem.overloads) {
      classitem.overloads.forEach(function(overload) {
        generateClassMethodWithParams(
          emitter,
          format,
          className,
          classitem,
          overload
        );
      });
    } else {
      generateClassMethodWithParams(
        emitter,
        format,
        className,
        classitem,
        classitem
      );
    }
  }

  /**
   *
   * @param {Emitter} emitter
   * @param {*} format
   * @param {string} className
   * @param {*} classitem
   * @param {*} overload
   */
  function generateClassMethodWithParams(
    emitter,
    format,
    className,
    classitem,
    overload
  ) {
    types.populateConstantType(constants, classitem, overload);
    const errors = validateMethod(classitem, overload);
    const params = (overload.params || []).map(translateParam);
    const returnType = overload.chainable
      ? className
      : overload.return
        ? translateType(overload.return.type, 'any').join('|')
        : 'void';
    let decl;

    if (classitem.is_constructor) {
      decl = format.constructor(params.join(', '));
    } else {
      decl = `${overload.static ? 'static ' : ''}${
        classitem.name
      }(${params.join(', ')}): ${returnType};`;
    }

    if (errors.length) {
      emitter.sectionBreak();
      emitter.lineComment(
        ` TODO: Fix ${classitem.name}() errors in ${overloadPosition(
          classitem,
          overload
        )}:`
      );
      emitter.lineComment();
      errors.forEach(function(error) {
        logger(
          `${classitem.name}() ${overloadPosition(
            classitem,
            overload
          )}, ${error}`
        );
        emitter.lineComment(`   ${error}`);
      });
      emitter.lineComment();
      emitter.lineComment(` ${decl}`);
      emitter.emptyLine();
    } else {
      emitter.itemDescription(classitem, overload);
      emitter.emit(format.method(decl));
    }
  }

  /**
   *
   * @param {Emitter} emitter
   * @param {*} format
   * @param {string} className
   */
  function generateClassConstructor(emitter, format, className) {
    const classitem = yuidocs.classes[className];
    if (classitem.is_constructor) {
      generateClassMethod(emitter, format, className, classitem);
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
   * @param {Emitter} emitter
   * @param {*} format
   * @param {string} className
   * @param {*} classitem
   */
  function generateClassProperty(emitter, format, className, classitem) {
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
      emitter.emit(
        `// TODO: Property "${itemName}", defined in ${classitemPosition(
          classitem
        )}, is not a valid JS symbol name`
      );
      emitter.sectionBreak();
    }
  }

  /**
   *
   * @param {AugmentersCache} augmentersCache
   * @param {*} format
   * @param {string} className
   */
  function generateClassProperties(augmentersCache, format, className) {
    getClassitems(className).forEach(function(classitem) {
      patchClassitemFile(classitem);
      const augmenter = augmentersCache.get(classitemFilename(classitem));
      if (classitem.itemtype === 'method') {
        generateClassMethod(augmenter, format, className, classitem);
      } else if (classitem.itemtype === 'property') {
        generateClassProperty(augmenter, format, className, classitem);
      } else {
        augmenter.emit(
          '// TODO: Annotate ' +
            classitem.itemtype +
            ' "' +
            classitem.name +
            '", defined in ' +
            classitemPosition(classitem)
        );
      }
    });
  }

  /**
   *
   * @param {AugmentersCache} augmentersCache
   * @param {*} format
   * @param {string} className
   */
  function generateP5Subclass(augmentersCache, format, className) {
    const info = yuidocs.classes[className];
    const nestedClassName = className.match(P5_CLASS_RE)[1];

    patchClassitemFile(info);

    const subclassAugmentersCache = new AugmentersCache(name => {
      const augmenter = augmentersCache.get(name);
      augmenter.emit(`interface ${nestedClassName}InstanceExtensions {`);
      augmenter.indent();
      return augmenter;
    });

    generateClassProperties(subclassAugmentersCache, format, className);

    for (const key in subclassAugmentersCache.augmenters) {
      if (subclassAugmentersCache.augmenters.hasOwnProperty(key)) {
        closeP5Augmentation(subclassAugmentersCache.augmenters[key]);
      }
    }
  }

  function generateUnknownClass(emitter, classname) {
    emitter.emit(`type ${classname} = any;`);
  }

  function emitConstants() {
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

  function emitLiterals() {
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

  function generateLocalsHeader(emitter) {
    emitter.emit(`// Type definitions for p5 ${versionString}`);
    emitter.emit('// Project: https://github.com/processing/p5.js');
    emitter.emit('// Definitions by: p5-types <https://github.com/p5-types>');
    emitter.emit(
      '// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
    );
    emitter.emit('// TypeScript Version: 2.4');

    emitter.emit('\n// This file was auto-generated. Please do not edit it.\n');
  }

  function generateClassHeader(emitter, prettyClassname, declare) {
    emitter.emit(`${declare ? 'declare ' : ''}class ${prettyClassname} {`);
    emitter.indent();
  }

  /**
   *
   * @param {Emitter} emitter
   * @param {string} prettyClassname
   * @param {boolean} declare
   */
  function generateClassFooter(emitter, prettyClassname, declare) {
    emitter.dedent();
    emitter.emit('}');
    emitter.emit(
      `${
        declare ? 'declare ' : ''
      }interface ${prettyClassname} extends p5.${prettyClassname}InstanceExtensions {}\n`
    );
  }

  function generateClassBody(emitter, format, className) {
    const nestedClassName = className.match(P5_CLASS_RE)[1];
    generateClassHeader(emitter, nestedClassName);
    generateClassConstructor(emitter, format, className);
    generateClassFooter(emitter, nestedClassName, false);
  }

  function generateExtensionsInterface(emitter, prettyClassname, classitem) {
    patchClassitemFile(classitem);
    emitter.emit(
      `interface ${prettyClassname}InstanceExtensions ${
        classitem.extends ? `extends ${classitem.extends}` : ''
      } {}`
    );
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

    generateClassHeader(emitter, 'p5', true);
    p5Aliases.forEach(className =>
      generateClassConstructor(emitter, formatLocals, className)
    );
    generateClassFooter(emitter, 'p5', true);

    emitter.emit('declare namespace p5 {');
    emitter.indent();

    emitter.emit('type UNKNOWN_P5_CONSTANT = any;');
    generateExtensionsInterface(emitter, 'p5', yuidocs.classes['p5']);

    p5Subclasses.forEach(className =>
      generateClassBody(emitter, formatLocals, className)
    );

    p5Subclasses.forEach(className =>
      generateExtensionsInterface(
        emitter,
        className.match(P5_CLASS_RE)[1],
        yuidocs.classes[className]
      )
    );
    emitter.dedent();
    emitter.emit('}');
  }

  /**
   *
   * @param {AugmentersCache} augmentersCache
   * @param {*} p5Aliases
   */
  function generatep5Augmenters(augmentersCache, p5Aliases) {
    const p5Augmenters = new AugmentersCache(name => {
      const augmenter = augmentersCache.get(name);
      openP5Augmentation(augmenter);
      return augmenter;
    });

    p5Aliases.forEach(className =>
      generateClassProperties(p5Augmenters, formatLocals, className)
    );

    for (const key in p5Augmenters.augmenters) {
      if (p5Augmenters.augmenters.hasOwnProperty(key)) {
        closeP5Augmentation(p5Augmenters.augmenters[key]);
      }
    }
  }

  function generate() {
    const p5Aliases = [];
    const p5Subclasses = [];
    const unknownClasses = [];
    const augmentersCache = new AugmentersCache(name =>
      createAugmenter(outdir, name)
    );

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

    generatep5Augmenters(augmentersCache, p5Aliases);

    p5Subclasses.forEach(className =>
      generateP5Subclass(augmentersCache, formatLocals, className)
    );

    // Emit globals for a while, then finish with emitting (shared) literals and constants
    logger(`Emitting global definitions...`);

    const globalEmitter = new Emitter(globalFilename);

    generateGlobalsHeader(globalEmitter);

    globalEmitter.emit('declare global {');
    globalEmitter.indent();
    const globalCache = new AugmentersCache(_ => globalEmitter);

    p5Aliases.forEach(className => {
      generateClassConstructor(globalEmitter, formatGlobals, className);
      generateClassProperties(globalCache, formatGlobals, className);
    });
    globalEmitter.dedent();
    globalEmitter.emit('}');

    globalEmitter.close();
    emitLiterals();
    emitConstants();

    generateAugmenterReferences(localEmitter, augmentersCache);
    generateLocalsBody(unknownClasses, localEmitter, p5Aliases, p5Subclasses);

    localEmitter.close();

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
