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