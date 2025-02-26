# iso8601

Convert ISO 8601 date strings (from Node/v8) to Node Date objects.
Non ISO 8601 strings and non-string types pass through.
Simple version of https://github.com/csnover/js-iso8601.

Zero runtime dependencies.

[![npm version](https://badge.fury.io/js/%40nearwood%2Fiso8601.svg)](https://www.npmjs.com/package/@nearwood/iso8601)

## Example

```javascript
var iso8601 = require('iso8601');

var date = "1977-02-03T00:00:00Z";
date = iso8601(date)
console.log(typeof date, date)
// object Wed Feb 02 1977 19:00:00 GMT-0500 (Eastern Standard Time)

var date = "bananas";
date = iso8601(date)
console.log(typeof date, date)
// string bananas

var date = {a: 1};
date = iso8601(date)
console.log(typeof date, date)
// object Object {a: 1}
```

## Install

```
npm install --save iso8601
```

## Test

```
npm test
```

## License

MIT
