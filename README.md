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
npm run generate
```

# Repository is no longer maintained
This repository has been archived to signal that it is no longer maintained.
Please reach out to https://github.com/Zalastax if you wish to maintain the repository.
Primary maintenance blocker right now are the types of issues found in https://github.com/p5-types/p5.ts/issues/24.
