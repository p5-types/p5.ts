# p5.ts

Generates TypeScript definitions for [p5.js](http://p5js.org).  
The generated typings are published to [@types/p5](https://www.npmjs.com/package/@types/p5).
To install the typings, run `npm install --save @types/p5`.
Then, look in the [examples directory](./examples) for inspiration.


`index.d.ts` is for p5 used in instance mode and `global.d.ts` is for p5 in global mode. 
`global.d.ts` references `index.d.ts`, so you must include both if global mode is used.

To generate typings yourself, try out:

```sh
npm i
npm run all
```

the generated typings are put at [p5](./types/p5) directory.

---

### Global mode instruction

p5js has official playground https://editor.p5js.org/, but it misses the typing hint. Here is a solution.

See [sketch.js](./examples/script/sketch.js) as an exmaple. After generating the types.

```ts
/// @ts-check
/// <reference path="../../types/p5/global.d.ts" />

const p5 = require("../../types/p5");

// here comes the code.
```

use [VS Code](https://code.visualstudio.com/) and  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin to auto reload your graph when code changes.

the browser will complain in the console that

```js
sketch.js:5 Uncaught ReferenceError: require is not defined
    at sketch.js:5:12
```

but it works.

---

### How to contribute

1. since this is a tool to generate ts type definition from yui doc, so help improve p5js's yui doc is a big deal. see [require upstream](https://github.com/p5-types/p5.ts/issues?q=is%3Aopen+label%3A%22require+upstream%22+sort%3Aupdated-desc)
2. when a new version of p5js is released, generate the new type files, then make a pr to https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/p5
