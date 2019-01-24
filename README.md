# p5.ts

Generates TypeScript definitions for [p5.js](http://p5js.org).  
The [releases](https://github.com/p5-types/p5.ts/tree/releases) branch
contains generated typings for published releases.

`index.d.ts` is for p5 used in instance mode and `global.d.ts` is for p5 in global mode. 
`global.d.ts` references `index.d.ts`, so you must include both if global mode is used.

To generate typings yourself, try out:
```sh
npm run download-p5
# npm run checkout <released-tag>
npm run generate-data
npm run generate
```
