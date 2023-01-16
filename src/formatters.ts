interface ClassitemFormatter {
  beginInstance: () => void
  formatInstanceMethod: MethodFormatter
  formatInstanceProperty: PropertyFormatter
  endInstance: () => void
  beginStatic: () => void
  formatStaticMethod: MethodFormatter
  endStatic: () => void
  formatType: TypeFormatter
}

import * as P5 from './p5_classes'

function declBody(itemName: any, params: any, returnType: any) {
  return `${itemName}(${params}): ${returnType}`;
}


function formatFunctionParam(formatter: { (types: any): any; (types: any): any; (arg0: any): any }, param: { name: any; paramType: any }) {
  return `${param.name}: ${formatter(param.paramType)}`;
}

const definitionsFormatFunctionParam = (param: any) =>
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
    .map((type: { type: string; value: any; params: any[] }) => {
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

const globalsFormatFunctionParam = (param: any) =>
  formatFunctionParam(globalsFormatType, param);

export function globalsFormatType(types: TranslatedType[]) {
  const needsParens = types.length > 1;
  return types
    .map((type: { type: string; value: any; params: any[] }) => {
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
  beginInstance: () => {},
  formatInstanceMethod: declBody,
  formatInstanceProperty: (final: any, decl: any) => {
    const modifier = final ? 'readonly ' : '';
    return `${modifier}${decl}`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  endStatic: () => {},
  formatStaticMethod: (name: any, params: any, returns: any) =>
    `static ${declBody(name, params, returns)}`,
  formatType: definitionsFormatType
};

export const globals = {
  beginInstance: () => {},
  formatInstanceMethod: (name: any, params: any, returns: any) =>
    `function ${declBody(name, params, returns)}`,
  formatInstanceProperty: (final: any, decl: any) => {
    const declarationType = final ? 'const' : 'let';
    return `${declarationType} ${decl};`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  formatStaticMethod: (name: any, params: any, returns: any) =>
    `// TODO: Report issue about ignored static method ${declBody(
      name,
      params,
      returns
    )}`,
  endStatic: () => {},
  formatType: globalsFormatType
};
