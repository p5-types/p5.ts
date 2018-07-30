interface Formatter {
  openStatic: (className: string) => string
  closeStatic: (className: string) => string
  staticMethod: (itemName: string, params: string, returnType: string) => string
  openInstance: (className: string) => string
  closeInstance: (className: string) => string
  instanceMethod: (itemName: string, params: string, returnType: string) => string
  property: (final: boolean, decl: string) => string,
  constructorOverload: (params: string) => string
}
