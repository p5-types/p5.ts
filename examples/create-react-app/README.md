This project was bootstrapped with [Create React App (with Typescript)](https://github.com/wmonk/create-react-app-typescript).

Important files are `tsconfig.json` and `src/p5`.

In `tsconfig.json` you'll need to include something like this until we publish @types/p5:
```
    "typeRoots": [
      "node_modules/@types",
      "../../DefinitelyTyped/types"
    ],
    "paths": {
      "*": ["../../DefinitelyTyped/types/*"]
    }
```
