# iso8601

Convert ISO 8601 date strings to Node (JS) Date objects.
Simple version of https://github.com/csnover/js-iso8601

## Example

```javascript
var iso8601 = require('iso8601');

var date = "1977-02-03T00:00:00Z";
date = iso8601(date)

typeof date
console.log(date);
// "object"
// Wed Feb 02 1977 19:00:00 GMT-0500 (Eastern Standard Time)
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