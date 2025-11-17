# p5.ts

for p5js v1 types, see branch v1

---

Generates TypeScript definitions for [p5.js](http://p5js.org).  
The generated typings are published to [@types/p5](https://www.npmjs.com/package/@types/p5).
To install the typings, run `npm install --save @types/p5`.
Then, look in the [examples directory](./examples) for inspiration.


`p5.d.ts` is for p5 used in instance mode and `global.d.ts` is for p5 in global mode. 
`global.d.ts` references `p5.d.ts`, so you must include both if global mode is used.

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

1. In p5.js v2, upstream use jsdoc to generate `.d.ts` files, so now this package just pull the type file from npm and extract the `tar.gz`. So contribute to the p5.js
