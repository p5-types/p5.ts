# p5.ts

Generates TypeScript definitions for [p5.js](http://p5js.org).  
The generated typings are published to [@types/p5](https://www.npmjs.com/package/@types/p5).
To install the typings, run `npm install --save @types/p5`.
Then, look in the [examples directory](./examples) for inspiration.


`index.d.ts` is for p5 used in instance mode and `global.d.ts` is for p5 in global mode. 
`global.d.ts` references `index.d.ts`, so you must include both if global mode is used.

To generate typings yourself, try out:
```sh
npm run download-p5
# npm run checkout <released-tag>
npm run generate-data
npm run generate
```
