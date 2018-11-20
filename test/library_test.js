const assert = require("assert");
const library = require("../src/functions_library.js");
const callbackLib = require("../src/callback_functions.js");
let {filter,map} = library;
let {isEven,isOdd,isPrime} = callbackLib;
let {increment_5,generateStars,mapLength} = callbackLib;

const testFilter = function(callbackFunction,inputArray,expectedOutput) {
  let actualOutput = filter(callbackFunction,inputArray);
  assert.deepEqual(actualOutput,expectedOutput);
}

const testMap = function(callbackFunction,inputArray,expectedOutput) {
  let actualOutput = map(callbackFunction,inputArray);
  assert.deepEqual(actualOutput,expectedOutput);
}

//-------------------------- Filter -------------------------------//

describe("Filter",function(){
  it("should work with empty input array",function() {
    testFilter(isOdd,[],[]);
    testFilter(isEven,[],[]);
    testFilter(isPrime,[],[]);
  });
  it("should work with a single element in input array",function() {
    testFilter(isEven,[2],[2]);
    testFilter(isEven,[1],[]);
    testFilter(isOdd,[4],[]);
    testFilter(isOdd,[3],[3]);
    testFilter(isPrime,[5],[5]);
    testFilter(isPrime,[6],[]);
  });
  it("should work with multiple elements in input array",function() {
    testFilter(isPrime,[0,4,5,7],[5,7]);
    testFilter(isOdd,[-2,-3,-4,7,5,4],[-3,7,5]);
    testFilter(isEven,[-2,-3,-4,7,5,4],[-2,-4,4]);
  });
});

//---------------------------- Map ---------------------------------//
describe("Map",function(){
  it("should work with empty input array",function() {
    testMap(increment_5,[],[]);
    testMap(generateStars,[],[]);
    testMap(mapLength,[],[]);
  });
  it("should work with a single element in input array",function() {
    testMap(generateStars,[2],["**"]);
    testMap(generateStars,[1],["*"]);
    testMap(increment_5,[4],[9]);
    testMap(increment_5,[3],[8]);
    testMap(mapLength,["musta"],[5]);
    testMap(mapLength,["sai ganesh"],[10]);
  });
  it("should work with multiple elements in input array",function() {
    testMap(mapLength,["affi","rahul","shubham"],[4,5,7]);
    testMap(increment_5,[-2,-14,7,5],[3,-9,12,10]);
    testMap(generateStars,[2,3,4,"musta"],["**","***","****","*****"]);
  });
});
