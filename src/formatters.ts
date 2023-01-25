///<reference path="./Foramtter.d.ts" />

import * as P5 from './p5_classes'

function declBody(itemName: string, params: string, returnType: TranslatedType[]) {
  return `${itemName}(${params}): ${returnType}`;
}


function formatFunctionParam(formatter: TypeFormatter, param: TranslatedFunctionParam) {
  return `${param.name}: ${formatter(param.paramType)}`;
}

const definitionsFormatFunctionParam = (param: TranslatedFunctionParam) =>
  formatFunctionParam(definitionsFormatType, param);

export function basicUnqualifiedP5(type: string) {
  const match = type.match(P5.CLASS_RE);
  if (match) {
    // return type with p5. removed
    return match[1];
  }

  return type;
}

function definitionsFormatType(types: TranslatedType[]) {
  const needsParens = types.length > 1;
  return types
    .map((type) => {
      if (type.type === 'basic') {
        return basicUnqualifiedP5(type.value);
      }
      if (type.type === 'function') {
        const f = `(${type.params
          .map(definitionsFormatFunctionParam)
          .join(', ')}) => any`;
        if (needsParens) {
          return `(${f})`;
        }
        return f;
      }
      if (type.type === 'array') {
        return `${definitionsFormatType(type.value)}[]`;
      }
    })
    .join('|');
}

const globalsFormatFunctionParam = (param) =>
  formatFunctionParam(globalsFormatType, param);

export function globalsFormatType(types: TranslatedType[]) {
  const needsParens = types.length > 1;
  return types
    .map((type) => {
      if (type.type === 'basic') {
        return type.value;
      }
      if (type.type === 'function') {
        const f = `(${type.params
          .map(globalsFormatFunctionParam)
          .join(', ')}) => any`;
        if (needsParens) {
          return `(${f})`;
        }
        return f;
      }
      if (type.type === 'array') {
        return `${globalsFormatType(type.value)}[]`;
      }
    })
    .join('|');
}


export const definitions = {
  beginInstance: () => { },
  formatInstanceMethod: declBody,
  formatInstanceProperty: (final: string, decl: string) => {
    const modifier = final ? 'readonly ' : '';
    return `${modifier}${decl}`;
  },
  endInstance: () => { },
  beginStatic: () => { },
  endStatic: () => { },
  formatStaticMethod: (name: string, params: string, returns: TranslatedType[]) =>
    `static ${declBody(name, params, returns)}`,
  formatType: definitionsFormatType
} as unknown as ClassitemFormatter;

export const globals = {
  beginInstance: () => { },
  formatInstanceMethod: (name: string, params: string, returns: TranslatedType[]) =>
    `function ${declBody(name, params, returns)}`,
  formatInstanceProperty: (final: string, decl: string) => {
    const declarationType = final ? 'const' : 'let';
    return `${declarationType} ${decl};`;
  },
  endInstance: () => { },
  beginStatic: () => { },
  formatStaticMethod: (name: string, params: string, returns: TranslatedType[]) =>
    `// TODO: Report issue about ignored static method ${declBody(
      name,
      params,
      returns
    )}`,
  endStatic: () => { },
  formatType: globalsFormatType
} as unknown as ClassitemFormatter;
