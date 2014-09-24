# mpass

Password generator using a mnemonic word list

[![build status](https://secure.travis-ci.org/avoidwork/mpass.svg)](http://travis-ci.org/avoidwork/mpass)

## API
_mpass (n)_

mpass takes a number as a parameter, to specify the amount of words to use. If not specified, `3` will be chosen.

## Example

```javascript
var mpass = require('mpass'),
    password = mpass();

console.log(password); // 3 random words, e.g. 'salaryvideoengine'
```
