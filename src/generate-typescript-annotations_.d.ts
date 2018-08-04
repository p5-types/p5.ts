type Logger = (message?: any, ...optionalParams: any[]) => void

interface GtaArgs {
  data: string
  outdir: string
  logger: Logger
}

interface CategorizedMethod {
  classitem: YUIDocsClassitemMethod
  overload: Overloadish
}

interface TranslatedParam {
  name: string
  type: TranslatedType[]
  optional: boolean
}

interface DescriptionParam {
  name: string
  description: string
  optional: boolean
}

interface MethodDescription {
  description: string
  params: DescriptionParam[]
  chainable?: 1
  returns?: string
}

type TypeTranslator = (type: string, defaultType: TranslatedType[]) => TranslatedType[]
type TypeValidator = (type: string) => boolean

interface ProcessedCategorizedMethod {
  description?: MethodDescription
  params: YUIDocsParam[]
  name: string
  checked: CheckedMethod
}

interface ProcessedCategorizedProperty {
  name: string
  type: TranslatedType[]
  final?: 1
  description?: string
}

interface HasFile {
  file: string
}

type Methodish = YUIDocsClassitemMethod | YUIDocsClass
type Overloadish = Methodish | YUIDocsClassitemMethodOverload

interface CheckedMethod {
  errors: string[]
  typedParams: Map<string, TranslatedType[]>
  returnType: TranslatedType[]
  classitem: Methodish
  overload: Overloadish
}

type MethodFormatter = (name: string, params: string, returns: string) => string
type PropertyFormatter = (final: boolean, decl: string) => string

interface ClassitemFormatter {
  beginInstance: () => void
  formatInstanceMethod: MethodFormatter
  formatInstanceProperty: PropertyFormatter
  endInstance: () => void
  beginStatic: () => void
  formatStaticMethod: MethodFormatter
  endStatic: () => void
}

type InvalidProperty = {
  type: "invalid-name",
  value: YUIDocsClassitemProperty
} | {
  type: "invalid-type",
  value: YUIDocsClassitemProperty
}
