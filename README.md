# Generate Get Element by Data Attribute

[![npm version](http://img.shields.io/npm/v/generate-get-element-by-data-attribute.svg?style=flat)](https://npmjs.org/package/generate-get-element-by-data-attribute "View this project on npm")

This package aims to prevent you from having to write same function over and over again.

Instead of writing
```javascript
document.querySelector("[data-testid=my-first-button");
document.querySelector("[data-testid=my-second-button");
document.querySelector("[data-testid=my-third-button");
```
each time you would like to access an element from a testid, this package allow you to write
```javascript
import { generateGetElementByDataAttribute } from "generate-get-element-by-data-attribute";

const getElementByTestId = generateGetElementByDataAttribute("testid");

getElementByTestId(document.body, "first-button");
getElementByTestId(document.body, "second-button");
getElementByTestId(document.body, "third-button");
```

Helpful for writing a lot of Jest tests.

Type definitons are provided!