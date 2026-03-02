# imaskjs
vanilla javascript input mask

[![npm version](https://badge.fury.io/js/%40bsolute%2Fimask.svg)](https://badge.fury.io/js/%40bsolute%2Fimask)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Coverage Status](https://coveralls.io/repos/github/harlamenko/imaskjs/badge.svg?branch=master)](https://coveralls.io/github/harlamenko/imaskjs?branch=master)

## Features
* get and set *raw* and *unmasked* values easily
* no external dependencies
* supports *[overwrite](https://harlamenko.github.io/imaskjs/guide.html#overwrite)* mode
* supports *web components*
* supports *contenteditable*
* **[RegExp](https://harlamenko.github.io/imaskjs/guide.html#masked-base)** mask
* **[Function](https://harlamenko.github.io/imaskjs/guide.html#masked-function)** mask
* **[Number](https://harlamenko.github.io/imaskjs/guide.html#masked-number)** mask (integer and decimal)
* **[Date](https://harlamenko.github.io/imaskjs/guide.html#masked-date)** mask (various format support, *autofix* mode)
* **[Dynamic/on-the-fly](https://harlamenko.github.io/imaskjs/guide.html#masked-dynamic)** mask
* **[Pattern](https://harlamenko.github.io/imaskjs/guide.html#masked-pattern)** mask
  - show placeholder always and only when necessary
  - unmasked value can contain fixed parts
  - optional input parts (greedy)
  - custom definitions
  - reusable blocks
  - secure text entry
  - **[Enum](https://harlamenko.github.io/imaskjs/guide.html#masked-enum)** and **[Range](https://harlamenko.github.io/imaskjs/guide.html#masked-range)** masks
  - **[Repeating](https://harlamenko.github.io/imaskjs/guide.html#repeat)** blocks
* convert and format values with **[pipe](https://harlamenko.github.io/imaskjs/guide.html#pipe)**

## Plugins
* [Vue plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/vue-imask)
* [Angular plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/angular-imask)
* [React plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/react-imask)
* [React Native plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/react-native-imask)
* [Svelte plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/svelte-imask)
* [Solid plugin](https://github.com/harlamenko/imaskjs/tree/master/packages/solid-imask)

## Install
`npm install @bsolute/imask` and `import IMask from '@bsolute/imask';`

or use CDN:

`<script src="https://unpkg.com/@bsolute/imask"></script>`

## Build & Test
`npm run make`

## Publish
1. `npm login`
2. `npm run make`
3. `npm run release`  
   This runs docs, tests, build, then `lerna publish`.

## Compatibility
Supports all major browsers. Can also be used with outdated browsers. [See how](https://harlamenko.github.io/imaskjs/guide.html#support-outdated)

## Getting help
- [Documentation and examples](https://harlamenko.github.io/imaskjs/)
- check answers on [stackoverflow.com](https://stackoverflow.com)
- ask question in [discussions](https://github.com/harlamenko/imaskjs/discussions)

