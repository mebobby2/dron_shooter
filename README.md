# Dron Shooter

## Building

```
yarn start
```

Starts webpack in watch mode.

## Running

Just open index.html in a browser

## Installing

```
yarn install
```

## Notes

### Building without Webpack
```
tsc -w
```
Run command above from this directory. TS watches for file changes and auto transpiles code.

### Why we need to use webpack?
```tsc -w``` can be used to transpile the ts code already. Why we need to use webpack?

It's all to do with how we want to load our external libraries/modules in our code.

#### CommonJS

We like to to use CommonJS module loading system with TypeScript because it allows us to install libraries using yarn/npm into the node_modules system. Then we can use a tool like Webpack/Browserify to bundle the app code and external libraries into one giant javascript file for the browser to download and use. I chose webpack since its more popular.

#### AMD
The other module loading system is AMD (implementing in require.js). AMD is designed for browser applications because they can benefit from lazy loading of modules.

```
It is not possible to use RequireJS on the client (browser) to access files from node_modules. Files under node_modules must first be copied to a location that is accessible (under the public folder) before the client can access them.
```

It is possible to use RequireJS to load Node modules, but this only works for server-side JavaScript (when you want to use RequireJS-style module syntax in Node).

#### Therefore

It does not make sense to configure TypeScript to use AMD because we do not want to load all our libraries inside script tags of the html files. CommonJS for loading modules and webpack for bundling code is a much better option. And since webpack supports transpilation, we use it for transpiling as well so we don't need to execute ```tsc -w``` manually.

### Typescript Definition Files
Since phaser librarie is written in js, to use inside a ts project, we have to include the ts definition files for the phaser lib. You see the lines:

```
  "node_modules/phaser-ce/typescript/phaser.d.ts",
  "node_modules/phaser-ce/typescript/pixi.d.ts"
```

in the tsconfig.json file.
