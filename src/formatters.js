/// <reference path="./Formatter.d.ts" />

function declBody(itemName, params, returnType) {
  return `${itemName}(${params}): ${returnType}`;
}

/**
 * @type {ClassitemFormatter}
 */
module.exports.definitions = {
  beginInstance: () => {},
  formatInstanceMethod: declBody,
  formatInstanceProperty: (final, decl) => {
    const modifier = final ? 'readonly ' : '';
    return `${modifier}${decl}`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  endStatic: () => {},
  formatStaticMethod: (name, params, returns) =>
    `static ${declBody(name, params, returns)}`
};

/**
 * @type {ClassitemFormatter}
 */
module.exports.globals = {
  beginInstance: () => {},
  formatInstanceMethod: (name, params, returns) =>
    `function ${declBody(name, params, returns)}`,
  formatInstanceProperty: (final, decl) => {
    const declarationType = final ? 'const' : 'let';
    return `${declarationType} ${decl};`;
  },
  endInstance: () => {},
  beginStatic: () => {},
  formatStaticMethod: (name, params, returns) =>
    `// TODO: Report issue about ignored static method ${declBody(
      name,
      params,
      returns
    )}`,
  endStatic: () => {}
};
