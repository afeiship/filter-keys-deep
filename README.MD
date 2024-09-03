# filter-keys-deep
> Filter out specified keys from an object (support deep structure).

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/filter-keys-deep
```

## usage
```js
import filterKeysDeep from '@jswork/filter-keys-deep';

const obj = {
  a: 1,
  b: 2,
  items: [
    { name: 'apple', price: 10, is_editing: true },
    { name: 'banana', price: 20, is_editing: false },
  ]
};


const result = filterKeysDeep(obj, ['is_editing']);

console.log(result);
/* expected output:
  {
    a: 1,
    b: 2,
    items: [
      { name: 'apple', price: 10 },
      { name: 'banana', price: 20 }
    ]
  }
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/filter-keys-deep/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/filter-keys-deep
[version-url]: https://npmjs.org/package/@jswork/filter-keys-deep

[license-image]: https://img.shields.io/npm/l/@jswork/filter-keys-deep
[license-url]: https://github.com/afeiship/filter-keys-deep/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/filter-keys-deep
[size-url]: https://github.com/afeiship/filter-keys-deep/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/filter-keys-deep
[download-url]: https://www.npmjs.com/package/@jswork/filter-keys-deep
