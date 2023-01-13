/// @ts-check
/// <reference path="./Formatter.d.ts" />

const P5 = require('./p5_classes');

/**
 * @param {any} itemName
 * @param {any} params
 * @param {any} returnType
 */
function declBody(itemName, params, returnType) {
  return `${itemName}(${params}): ${returnType}`;
}

/**
 *
 * @param {TypeFormatter} formatter
 * @param {TranslatedFunctionParam} param
 */
function formatFunctionParam(formatter, param) {
  return `${param.name}: ${formatter(param.paramType)}`;
}

const definitionsFormatFunctionParam = (/** @type {any} */ param) =>
  formatFunctionParam(definitionsFormatType, param);

/**
 *
 * @param {string} type
 */
function basicUnqualifiedP5(type) {
  const match = type.match(P5.CLASS_RE);
  if (match) {
    // return type with p5. removed
    return match[1];
  }

  return type;
}
module.exports.basicUnqualifiedP5 = basicUnqualifiedP5;

/**
 *
 * @param {TranslatedType[]} types
 */
function definitionsFormatType(types) {
  const needsParens = types.length > 1;
  return types
    .map(type => {
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

const globalsFormatFunctionParam = (/** @type {any} */ param) =>
  formatFunctionParam(globalsFormatType, param);

/**
 *
 * @param {TranslatedType[]} types
 */
function globalsFormatType(types) {
  const needsParens = types.length > 1;
  return types
    .map(type => {
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

module.exports.globalsFormatType = globalsFormatType;

module.exports.definitions = {
  beginInstance: () => {},
  formatInstanceMethod: declBody,
  formatInstanceProperty: (/** @type {any} */ final, /** @type {any} */ decl) => {
    const modifier = final ? 'readonly ' : '';
    return `${modifier}${decl}`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  endStatic: () => {},
  formatStaticMethod: (/** @type {any} */ name, /** @type {any} */ params, /** @type {any} */ returns) =>
    `static ${declBody(name, params, returns)}`,
  formatType: definitionsFormatType
};

module.exports.globals = {
  beginInstance: () => {},
  formatInstanceMethod: (/** @type {any} */ name, /** @type {any} */ params, /** @type {any} */ returns) =>
    `function ${declBody(name, params, returns)}`,
  formatInstanceProperty: (/** @type {any} */ final, /** @type {any} */ decl) => {
    const declarationType = final ? 'const' : 'let';
    return `${declarationType} ${decl};`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  formatStaticMethod: (/** @type {any} */ name, /** @type {any} */ params, /** @type {any} */ returns) =>
    `// TODO: Report issue about ignored static method ${declBody(
      name,
      params,
      returns
    )}`,
  endStatic: () => {},
  formatType: globalsFormatType
};
