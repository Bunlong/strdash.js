# strdash.js

strdash.js is an open-source JavaScript library for formatting and manipulating strings.

[![NPM](https://img.shields.io/npm/v/strdash.svg)](https://www.npmjs.com/package/strdash) ![npm bundle size](https://img.shields.io/bundlephobia/min/strdash) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🔧 Install

strdash.js is available on npm. It can be installed with the following command:

```
npm install strdash --save
```

strdash is available on yarn as well. It can be installed with the following command:

```
yarn add strdash --save
```

If you don't want to use npm or yarn, [strdash.min.js](https://unpkg.com/strdash@0.2.0/strdash.min.js) can be downloaded to your project source.

## 📖 Documentation

### 🎀 isEmpty()

```js
// Node.js
const str = require("strdash");

console.log(str('').isEmpty());
// expected output: true
```

### 🎀 isNumeric()

```js
console.log(str('123').isNumeric());
// expected output: true
```

### 🎀 isAlpha()

```js
console.log(str('abc').isAlpha());
// expected output: true
```

### 🎀 isAlphaNumeric()

```js
console.log(str('abc123').isAlphaNumeric());
// expected output: true
```

### 🎀 isLowerCase()

```js
console.log(str('abc').isLowerCase());
// expected output: true
```

### 🎀 isUpperCase()

```js
console.log(str('ABC').isUpperCase());
// expected output: true
```

### 🎀 toBoolean()

```js
console.log(str('true').toBoolean());
// expected output: true

console.log(str('yes').toBoolean());
// expected output: true

console.log(str('on').toBoolean());
// expected output: true

console.log(str('1').toBoolean());
// expected output: true
```

### 🎀 toInt()

```js
console.log(str('99').toInt());
// expected output: 99
```

### 🎀 toFloat()

```js
console.log(str('99').toFloat(2));
// expected output: 99
```

### 🎀 toString()

```js
console.log(str(99).toString());
// expected output: "99"
```

## 📜 Changelog

Latest version 0.2.0 (2021-09-14):

* toBoolean()
* toInt()
* toFloat()
* toString()

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/strdash/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `strdash.js` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `strdash.js` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
