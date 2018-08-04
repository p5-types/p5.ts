interface TranslatedBasic {
  type: "basic"
  value: string
}

interface TranslatedFunctionParam {
  name: string
  paramType: TranslatedType[]
}

interface TranslatedFunction {
  type: "function"
  params: TranslatedFunctionParam[]
}

interface TranslatedArray {
  type: "array"
  value: TranslatedType[]
}

type TranslatedType = TranslatedBasic | TranslatedFunction | TranslatedArray
