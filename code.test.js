const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const infix = "1 + 1"
const postfix = toPostfix(infix);
assert(postfix == "1 1 +");

const infix1 = "(1+2)-(3*4+5)"
const postfix1 = toPostfix(infix1);
assert(postfix1 == "1 2 + 3 4 * 5 + -");

const infix2 = "(11+22)-(33*44+55)"
const postfix2 = toPostfix(infix2);
assert(postfix2 == "11 22 + 33 44 * 55 + -");

const infix3 = "3/4+8"
const postfix3 = toPostfix(infix3);
assert(postfix3 == "3 4 / 8 +");

const infix4 = "3/(4+8)"
const postfix4 = toPostfix(infix4);
assert(postfix4 == "3 4 8 + /");
