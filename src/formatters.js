/// <reference path="./Formatter.d.ts" />

function declBody(itemName, params, returnType) {
  return `${itemName}(${params}): ${returnType}`;
}

module.exports = {
  /**
   * @type Formatter
   */
  locals: {
    openStatic: className => `namespace ${className} {`,
    closeStatic: _ => '}',
    staticMethod: (itemName, params, returnType) =>
      `function ${declBody(itemName, params, returnType)}`,
    openInstance: className => `interface ${className} {`,
    closeInstance: _ => '}',
    instanceMethod: declBody,
    property: (final, decl) => {
      const modifier = final ? 'readonly ' : '';
      return `${modifier}${decl};`;
    },
    constructorOverload: params => `constructor(${params});`
  },

  /**
   * @type Formatter
   */
  globals: {
    openStatic: _ => '',
    closeStatic: _ => '',
    staticMethod: itemName =>
      '// TODO: Report issue about ignored static method' + itemName,
    openInstance: _ => '',
    closeInstance: _ => '',
    instanceMethod: (itemName, params, returnType) =>
      `function ${declBody(itemName, params, returnType)}`,
    property: (final, decl) => {
      const declarationType = final ? 'const' : 'let';
      return `${declarationType} ${decl};`;
    },
    constructorOverload: params => `function p5(${params}): p5;`
  }
};
