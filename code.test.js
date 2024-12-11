const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const infix1 = "(1+2)-(33*44+55)"
const postfix1 = toPostfix(infix1);
assert(postfix1 == "1 2 + 33 44 * 55 + -");
