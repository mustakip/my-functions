const assert = require("assert");
const library = require("../src/functions_library.js");
const util = require("../src/functions_util.js");
let {filter} = library;
let {isEven,isOdd,isPrime} = util;

//--------------------------Testing filter function--------------------//
assert.deepEqual(filter([1,2,3,4,5],isEven),[2,4]);
assert.deepEqual(filter([1,2,3,4,5],isOdd),[1,3,5]);
assert.deepEqual(filter([4,5,2,3,80,7,5,0],isPrime),[5,2,3,7,5]);

assert.deepEqual(filter([],isOdd),[]);
assert.deepEqual(filter([],isEven),[]);
assert.deepEqual(filter([],isPrime),[]);

assert.deepEqual(filter([0],isPrime),[]);
assert.deepEqual(filter([-2,-3,-4,7,5,4],isOdd),[-3,7,5]);
assert.deepEqual(filter([-2,-3,-4,7,5,4],isEven),[-2,-4,4]);






//-----------------------------------------------------------------------//
console.log("Test Passed ...!!");
