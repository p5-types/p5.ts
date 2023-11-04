/// <reference path="./types_.d.ts" />
/// <reference path="./data.d.ts" />
/// <reference path="./generate-typescript-annotations.d.ts" />
import * as parser from './parser';
import * as P5 from './p5_classes';

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
  'MediaStreamAudioSourceNode',
  'MouseEvent',
  'TouchEvent',
  'UIEvent',
  'KeyboardEvent',
  'WheelEvent'
]);

const CONSTANT = 'Constant';
export const CONSTANT_OUT = 'p5.UNKNOWN_P5_CONSTANT';


export function basic(value: string): TranslatedBasic {
  return {
    type: 'basic',
    value
  };
}


function func(params: TranslatedFunctionParam[]): TranslatedFunction {
  return {
    type: 'function',
    params
  };
}


function arr(value: TranslatedType[]): TranslatedArray {
  return {
    type: 'array',
    value
  };
}


const YUIDOC_TO_TYPESCRIPT_PARAM_MAP: { [key: string]: TranslatedType } = {
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


export function translateType(yuidocs: YUIDocsData, constants: Map<string, RegExpExecArray[]>, missingTypes: Set<string>, type: string | undefined, defaultType: TranslatedType[]): TranslatedType[] {
  if (type === undefined) {
    return defaultType;
  }

  type = type.trim();

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
        const paramName = `p${(i + 1)}`;
        const paramType = translateType(yuidocs, constants, missingTypes, t, [
          YUIDOC_TO_TYPESCRIPT_PARAM_MAP.Any
        ]);
        return {
          name: paramName,
          paramType
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

  return parsed.flat(3);
}


export function populateConstantType(constants: Map<string, RegExpExecArray[]>, classitem: NamedYUIDocsClassitemish, overload: Overloadish) {
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


function isValidP5ClassName(yuidocs: YUIDocsData, className: string) {
  return (
    (P5.CLASS_RE.test(className) && className in yuidocs.classes) ||
    (P5.CLASS_RE.test(`p5.${className}`) &&
      `p5.${className}` in yuidocs.classes)
  );
}


export function validateType(yuidocs: YUIDocsData, constants: Map<string, RegExpExecArray[]>, missingTypes: Set<string>, type: string): boolean {
  const translated = translateType(yuidocs, constants, missingTypes, type, []);
  return translated.length > 0;
}
