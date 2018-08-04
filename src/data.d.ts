interface YUIDocsClasses {
  [key: string]: YUIDocsClass
}

interface YUIDocsData {
  project: YUIDocsProject
  files: {
    [key: string]: YUIDocsFileItem[]
  }
  modules: {
    [key: string]: YUIDocsModule
  }
  classes: YUIDocsClasses
  elements: {}
  classitems: YUIDocsClassitem[]
  consts: {
    [key: string]: string[]
  }
}

interface YUIDocsWarning {
  message: string
  line: string
}

interface YUIDocsParam {
  name: string;
  description: string;
  type: string;
  optional?: boolean;
  multiple?: boolean;
  optdefault?: string;
}

type YUIDocsClassitem = YUIDocsClassitemUndefined | YUIDocsClassitemAttribute | YUIDocsClassitemMethod | YUIDocsClassitemProperty

type NamedYUIDocsClassitem = YUIDocsClassitemAttribute | YUIDocsClassitemMethod | YUIDocsClassitemProperty

type NamedYUIDocsClassitemish = NamedYUIDocsClassitem | YUIDocsClass

type IsNamedYUIDocsClassitem = (arg: YUIDocsClassitem) => arg is NamedYUIDocsClassitem

interface YUIDocsClassitemCommon {
  file: string;
  line: number;
  description?: string;
  'class': string;
  module: string;
  submodule?: string;
}

interface YUIDocsClassitemUndefined extends YUIDocsClassitemCommon {
  requires?: string[];
  itemtype: undefined
}

interface YUIDocsClassitemAttribute extends YUIDocsClassitemCommon {
  itemtype: "attribute";
  name: string;
  type: string;
  'default': string;
}

interface YUIDocsClassitemMethod extends YUIDocsClassitemCommon {
  itemtype: "method";
  name: string;
  params?: YUIDocsParam[];
  'return'?: YUIDocsReturn;
  example?: string[];
  alt?: string;
  overloads?: YUIDocsClassitemMethodOverload[];
  chainable?: 1;
  'static'?: 1;
  deprecated?: boolean;
  deprecationMessage?: string;
}

interface YUIDocsClassitemProperty extends YUIDocsClassitemCommon {
  itemtype: "property";
  name: string;
  type?: string;
  'final'?: 1;
  example?: string[];
  alt?: string;
  'default'?: string;
  readonly?: string;
  category?: string[];
  'return'?: YUIDocsReturn;
}

interface YUIDocsReturn {
  description: string;
  type: string;
}

interface YUIDocsParam {
  name: string;
  description: string;
  type: string;
  optional?: boolean;
  multiple?: boolean;
  optdefault?: string;
}

interface YUIDocsClassitemMethodOverload {
  line: number;
  params?: YUIDocsParam[];
  'return'?: YUIDocsReturn;
  chainable?: 1;
  'static'?: 1;
}

interface YUIDocsProject {
  name: string
  description: string
  version: string
  url: string
}

interface ExistsMap {
  [key: string]: 1
}

interface YUIDocsFileItem {
  name: string
  modules: ExistsMap
  classes: ExistsMap
  fors: ExistsMap
  namespaces: ExistsMap
}

interface YUIDocsModule {
  name: string
  submodules: ExistsMap
  elements: ExistsMap
  classes: ExistsMap
  fors: ExistsMap
  namespace?: string
  namespaces: ExistsMap
  file?: string
  line: number
  is_submodule?: 1
  module?: string
  requires?: string[]
  description?: string
  tag?: string
  itemtype?: string
}

interface YUIDocsClass {
  name: string
  shortname: string
  classitems: YUIDocsClassitem[]
  plugins: any[]
  extensions: any[]
  plugin_for: any[]
  extension_for: any[]
  module: string
  submodule: string
  namespace: string
  file: string
  line: number
  description: string
  is_constructor?: 1
  params: YUIDocsParam[]
  'return': YUIDocsReturn
  'extends'?: string
  example: string[]
  alt: string
}
