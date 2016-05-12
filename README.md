# mpass

Password generator using a mnemonic word list

[![build status](https://secure.travis-ci.org/avoidwork/mpass.svg)](http://travis-ci.org/avoidwork/mpass)

## API
_mpass (n[, true])_

_mpass()_ takes an optional number, & boolean. The first parameter is the amount of words to use (defaults to `3`), and the
second enables common special characters for passwords (defaults to `false`).

## Example

```javascript
var mpass = require('mpass');

console.log(mpass()); // 3 random words, e.g. 'salaryvideoengine'
console.log(mpass(3, true)); // 3 random words & special characters, e.g. 'Extremepar0dynovel$'
```

## License
Copyright (c) 2016 Jason Mulligan
Licensed under the BSD-3 license
