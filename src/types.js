/// @ts-check

/// <reference path="./types_.d.ts" />
/// <reference path="./data.d.ts" />
/// <reference path="./generate-typescript-annotations_.d.ts" />

const flatten = require('./util').flatten;
const parser = require('./parser');
const P5 = require('./p5_classes');

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
  'MediaStream',
  'MediaStreamAudioSourceNode'
]);

const CONSTANT = 'Constant';
const CONSTANT_OUT = 'p5.UNKNOWN_P5_CONSTANT';

/**
 *
 * @param {string} value
 * @returns {TranslatedBasic}
 */
function basic(value) {
  return {
    type: 'basic',
    value: value
  };
}

/**
 *
 * @param {TranslatedFunctionParam[]} params
 * @returns {TranslatedFunction}
 */
function func(params) {
  return {
    type: 'function',
    params: params
  };
}

/**
 *
 * @param {TranslatedType[]} value
 * @returns {TranslatedArray}
 */
function arr(value) {
  return {
    type: 'array',
    value: value
  };
}

/**
 * @type {Object.<string, TranslatedType>}
 */
const YUIDOC_TO_TYPESCRIPT_PARAM_MAP = {
  Object: basic('object'),
  Any: basic('any'),
  Number: basic('number'),
  Integer: basic('number'),
  String: basic('string'),
  Constant: basic(CONSTANT_OUT),
  undefined: basic('undefined'),
  Null: basic('null'),
  Array: basic('any[]'),
  Boolean: basic('boolean'),
  '*': basic('any'),
  Void: basic('void'),
  P5: basic('p5'),
  Promise: basic('Promise<any>'),
  // When the docs don't specify what kind of function we expect,
  // then we need to use the global type `Function`
  Function: func([
    {
      name: '...args',
      paramType: [arr([basic('any')])]
    }
  ]),
  // Special ignore for hard to fix YUIDoc from p5.sound
  'Tone.Signal': basic('any'),
  SoundObject: basic('any')
};

/**
 *
 * @param {YUIDocsData} yuidocs
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {Set<string>} missingTypes
 * @param {string|undefined} type
 * @param {TranslatedType[]} defaultType
 *
 * @returns {TranslatedType[]}
 */
function translateType(yuidocs, constants, missingTypes, type, defaultType) {
  if (type === undefined) {
    return defaultType;
  }

  type = type.trim();

  /**
   * @type TranslatedType[][]
   */
  const parsed = parser.splitType(type).map(part => {
    if (part.length > 2 && part.substring(part.length - 2) === '[]') {
      return [
        arr(
          translateType(
            yuidocs,
            constants,
            missingTypes,
            part.substr(0, part.length - 2),
            defaultType
          )
        )
      ];
    }

    const matchFunction = part.match(/Function\(([^)]*)\)/i);
    if (matchFunction) {
      const paramTypes = matchFunction[1].split(',');
      const mappedParamTypes = paramTypes.map((t, i) => {
        const paramName = 'p' + (i + 1);
        const paramType = translateType(yuidocs, constants, missingTypes, t, [
          YUIDOC_TO_TYPESCRIPT_PARAM_MAP.Any
        ]);
        return {
          name: paramName,
          paramType: paramType
        };
      });
      return [func(mappedParamTypes)];
    }

    const staticallyMappedType = YUIDOC_TO_TYPESCRIPT_PARAM_MAP[part];
    if (staticallyMappedType != null) {
      return [staticallyMappedType];
    }

    if (EXTERNAL_TYPES.has(part)) {
      return [basic(part)];
    }
    if (isValidP5ClassName(yuidocs, part)) {
      return [basic(part)];
    }

    if (constants.has(part)) {
      return [basic(`p5.${part}`)];
    }

    missingTypes.add(part);
    return defaultType;
  });

  return flatten(parsed);
}

/**
 *
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {NamedYUIDocsClassitemish} classitem
 * @param {Overloadish} overload
 */
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
        constants.set(extracted.constName, extracted.values);

        types[index] = extracted.constName;
        param.type = types.join('|');
      }
    }
  }
}

/**
 * @param {YUIDocsData} yuidocs
 * @param {string} className
 */

function isValidP5ClassName(yuidocs, className) {
  return (
    (P5.CLASS_RE.test(className) && className in yuidocs.classes) ||
    (P5.CLASS_RE.test('p5.' + className) &&
      'p5.' + className in yuidocs.classes)
  );
}

/**
 * @param {YUIDocsData} yuidocs
 * @param {Map<string, RegExpExecArray[]>} constants
 * @param {Set<string>} missingTypes
 * @param {string} type
 *
 * @returns {boolean}
 */
function validateType(yuidocs, constants, missingTypes, type) {
  const translated = translateType(yuidocs, constants, missingTypes, type, []);
  return translated.length > 0;
}

module.exports = {
  CONSTANT_OUT: CONSTANT_OUT,
  populateConstantType: populateConstantType,
  translateType: translateType,
  validateType: validateType,
  basic: basic
};
