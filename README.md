# p5.ts

Generates TypeScript definitions for [p5.js](http://p5js.org).  
The generated typings are published to [@types/p5](https://www.npmjs.com/package/@types/p5).
To install the typings, run `npm install --save @types/p5`.

`index.d.ts` is for p5 used in instance mode and `global.d.ts` is for p5 in global mode. 
`global.d.ts` references `index.d.ts`, so you must include both if global mode is used.

To generate typings yourself, try out:

```sh
npm run download-p5
npm run generate
```

the generated typings are put at types/p5 directory. For single file usage, see examples/sketch.js as an exmaple.

```ts
//@ts-check
/// <reference path="../p5/global.d.ts" />
/// <reference path="../p5/index.d.ts" />
const p5 = require("../types/p5");

// here comes the code.
```

the browser will complain that

```js
sketch.js:5 Uncaught ReferenceError: require is not defined
    at sketch.js:5:12
```

but it works.
