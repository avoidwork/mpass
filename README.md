# mpass

Password generator using a mnemonic word list

[![build status](https://secure.travis-ci.org/avoidwork/mpass.svg)](http://travis-ci.org/avoidwork/mpass)

## Example

```javascript
var mpass = require('mpass'),
    password = mpass(3);

console.log(password); // 3 random words, e.g. 'salaryvideoengine'
```
