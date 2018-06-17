/// @ts-check
const createEmitter = require('./emit');
const types = require('./types');
const fs = require('fs');
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

// mod is used to make yuidocs "global". It actually just calls generate()
// This design was selected to avoid rewriting the whole file from
// https://github.com/toolness/friendly-error-fellowship/blob/2093aee2acc53f0885fcad252a170e17af19682a/experiments/typescript/generate-typescript-annotations.js
function mod(args) {
  const yuidocs = JSON.parse(fs.readFileSync(args.data, 'utf8'));
  const localFilename = args.local;
  const globalFilename = args.global;
  const logger = args.logger || console.log;
  // TODO: Turn emit into a parameter
  let emit;
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

  function generateClassMethod(format, className, classitem) {
    if (classitem.overloads) {
      classitem.overloads.forEach(function(overload) {
        generateClassMethodWithParams(format, className, classitem, overload);
      });
    } else {
      generateClassMethodWithParams(format, className, classitem, classitem);
    }
  }

  function generateClassMethodWithParams(
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
      emit.sectionBreak();
      emit(
        '// TODO: Fix ' +
          classitem.name +
          '() errors in ' +
          overloadPosition(classitem, overload) +
          ':'
      );
      emit('//');
      errors.forEach(function(error) {
        logger(
          `${classitem.name}() ${overloadPosition(
            classitem,
            overload
          )}, ${error}`
        );
        emit('//   ' + error);
      });
      emit('//');
      emit('// ' + decl);
      emit('');
    } else {
      emit.description(classitem, overload);
      emit(format.method(decl));
    }
  }

  function generateClassConstructor(format, className) {
    const classitem = yuidocs.classes[className];
    if (classitem.is_constructor) {
      generateClassMethod(format, className, classitem);
    }
  }

  function wrapLiteral(literal, isString) {
    if (isString) {
      return "'" + literal.replace(/'/g, "\\'") + "'";
    }
    return literal;
  }

  function generateClassProperty(format, className, classitem) {
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

      emit.description(classitem);

      emit(format.property(classitem.final, decl));
    } else {
      emit.sectionBreak();
      emit(
        `// TODO: Property "${itemName}", defined in ${classitemPosition(
          classitem
        )}, is not a valid JS symbol name`
      );
      emit.sectionBreak();
    }
  }

  function generateClassProperties(format, className) {
    getClassitems(className).forEach(function(classitem) {
      classitem.file = classitem.file.replace(/\\/g, '/');
      emit.setCurrentSourceFile(classitem.file);
      if (classitem.itemtype === 'method') {
        generateClassMethod(format, className, classitem);
      } else if (classitem.itemtype === 'property') {
        generateClassProperty(format, className, classitem);
      } else {
        emit(
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

  function generateP5Properties(format, className) {
    emit.sectionBreak();
    emit('// Properties from ' + className);
    emit.sectionBreak();

    generateClassConstructor(format, className);
    generateClassProperties(format, className);
  }

  function generateP5Subclass(format, className) {
    const info = yuidocs.classes[className];
    const nestedClassName = className.match(P5_CLASS_RE)[1];

    info.file = info.file.replace(/\\/g, '/');
    emit.setCurrentSourceFile(info.file);

    emit(
      'class ' +
        nestedClassName +
        (info.extends ? ' extends ' + info.extends : '') +
        ' {'
    );
    emit.indent();

    generateClassConstructor(format, className);
    generateClassProperties(format, className);

    emit.dedent();
    emit('}');
  }

  function generateUnknownClass(classname) {
    emit(`type ${classname} = any;`);
  }

  function emitConstants() {
    emit('// Constants');
    Object.keys(constants).forEach(function(key) {
      const values = constants[key];

      emit.sectionBreak();
      emit(`type ${key} =`);
      values.forEach(function(v, i) {
        let str = `${i ? '|' : ' '} ${v}`;
        if (i === values.length - 1) {
          str += ';';
        }
        emit(`    ${str}`);
      });
    });
  }

  function emitLiterals() {
    emit('// Literals');
    Object.keys(literals).forEach(function(key) {
      emit(`type ${key} = ${literals[key]};`);
    });
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

    logger(`Emitting local definitions to ${localFilename}`);

    emit = createEmitter(localFilename);

    emit(`// Type definitions for p5 ${versionString}`);
    emit('// Project: https://github.com/processing/p5.js');
    // Would like to just say it's generated, but it seems like
    // DT want a real name and a github profile.
    emit('// Definitions by: p5-types <https://github.com/p5-types>');
    emit('// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped');
    emit('// TypeScript Version: 2.4');

    emit('\n// This file was auto-generated. Please do not edit it.\n');

    emit('export = p5;');

    unknownClasses.forEach(generateUnknownClass);

    emit('declare class p5 {');
    emit.indent();

    p5Aliases.forEach(className =>
      generateP5Properties(formatLocals, className)
    );

    emit.dedent();
    emit('}\n');

    emit('declare namespace p5 {');
    emit.indent();

    p5Subclasses.forEach(className =>
      generateP5Subclass(formatLocals, className)
    );

    // Emit globals for a while, then finish with emitting (shared) literals and constants
    logger(`Emitting global definitions to ${globalFilename}`);

    let localEmit = emit;
    emit = createEmitter(globalFilename);

    emit(`// Global mode type definitions for p5`);

    emit('\n// This file was auto-generated. Please do not edit it.\n');

    emit(`import * as p5 from './index';`);

    emit('declare global {');
    emit.indent();
    p5Aliases.forEach(className =>
      generateP5Properties(formatGlobals, className)
    );
    emit.dedent();
    emit('}');

    emit.close();
    emit = localEmit;
    // Emit all literals and constants into the local definitions file
    emit.sectionBreak();
    emitLiterals();
    emit.sectionBreak();
    emitConstants();
    emit('type UNKNOWN_P5_CONSTANT = any;');
    emit.dedent();
    emit('}');

    emit.close();

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
