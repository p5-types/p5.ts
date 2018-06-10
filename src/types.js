/// @ts-check

const flatten = require('./util').flatten;
const parser = require('./parser');

const EXTERNAL_TYPES = new Set([
  'HTMLCanvasElement',
  'HTMLElement',
  'Float32Array',
  'AudioParam',
  'AudioNode',
  'GainNode',
  'DelayNode',
  'ConvolverNode',
  'Event',
  'Blob',
  'null',
  'Node',
  'RegExp',
  'Promise'
]);

const CONSTANT = 'Constant';
const CONSTANT_OUT = 'UNKNOWN_P5_CONSTANT';

const YUIDOC_TO_TYPESCRIPT_PARAM_MAP = {
  Object: 'object',
  Any: 'any',
  Number: 'number',
  Integer: 'number',
  String: 'string',
  Constant: CONSTANT_OUT,
  undefined: 'undefined',
  Null: 'null',
  Array: 'any[]',
  Boolean: 'boolean',
  '*': 'any',
  Void: 'void',
  P5: 'p5',
  // When the docs don't specify what kind of function we expect,
  // then we need to use the global type `Function`
  Function: 'Function',
  // Special ignore for hard to fix YUIDoc from p5.sound
  'Tone.Signal': 'any',
  SoundObject: 'any'
};

const P5_CLASS_RE = /^p5\.([^.]+)$/;

/**
 *
 * @param {string} type
 * @param {string} [defaultType]
 *
 * @returns {string[]}
 */
function translateType(yuidocs, constants, missingTypes, type, defaultType) {
  if (type === void 0) {
    return [defaultType];
  }

  type = type.trim();

  return flatten(
    parser.splitType(type).map(part => {
      if (part === '') {
        return [];
      }

      if (part.length > 2 && part.substring(part.length - 2) === '[]') {
        return translateType(
          yuidocs,
          constants,
          missingTypes,
          part.substr(0, part.length - 2),
          defaultType
        ).map(translated => translated + '[]');
      }

      const matchFunction = part.match(/Function\(([^)]*)\)/i);
      if (matchFunction) {
        const paramTypes = matchFunction[1].split(',');
        const mappedParamTypes = paramTypes.map((t, i) => {
          const paramName = 'p' + (i + 1);
          const paramType = translateType(
            yuidocs,
            constants,
            missingTypes,
            t,
            'any'
          );
          return paramName + ': ' + paramType.join('|');
        });
        return ['(' + mappedParamTypes.join(',') + ') => any'];
      }

      const staticallyMappedType = YUIDOC_TO_TYPESCRIPT_PARAM_MAP[part];
      if (staticallyMappedType != null) {
        return staticallyMappedType;
      }

      if (EXTERNAL_TYPES.has(part)) {
        return part;
      }
      if (isValidP5ClassName(yuidocs, part)) {
        return part;
      }

      if (constants[part]) {
        return part;
      }

      missingTypes[part] = true;
      return defaultType;
    })
  );
}

function populateConstantType(constants, classitem, overload) {
  for (const param of overload.params || []) {
    const types = parser.splitType(param.type);
    const index = types.indexOf(CONSTANT);
    if (index !== -1) {
      const extracted = parser.extractConstantsFromDescription(
        classitem.name,
        param.name,
        param.description
      );
      if (extracted) {
        constants[extracted.constName] = extracted.values;

        types[index] = extracted.constName;
        param.type = types.join('|');
      }
    }
  }
}

/**
 * @param {string} className
 */

function isValidP5ClassName(yuidocs, className) {
  return (
    (P5_CLASS_RE.test(className) && className in yuidocs.classes) ||
    (P5_CLASS_RE.test('p5.' + className) &&
      'p5.' + className in yuidocs.classes)
  );
}

/**
 * @param {string} type
 *
 * @returns boolean
 */
function validateType(yuidocs, constants, missingTypes, type) {
  const translated = translateType(yuidocs, constants, missingTypes, type);
  return !(translated.length === 1 && translated[0] === undefined);
}

module.exports = {
  CONSTANT_OUT: CONSTANT_OUT,
  populateConstantType: populateConstantType,
  translateType: translateType,
  validateType: validateType
};
