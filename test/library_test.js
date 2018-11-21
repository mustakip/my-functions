const assert = require("assert");
const library = require("../src/functions_library.js");
const callbackLib = require("../src/callback_functions.js");
let {filter,map,reduce} = library;
let {isEven,isOdd,isPrime} = callbackLib;
let {increment_5,generateStars,mapLength} = callbackLib;

//-------------------------- Filter -------------------------------//

describe("Filter",function(){
  it("should work with empty input array",function() {
    assert.deepEqual(filter(isOdd,[]),[]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isPrime,[]),[]);
  });
  it("should work with a single element in input array",function() {
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isOdd,[4]),[]);
    assert.deepEqual(filter(isOdd,[3]),[3]);
    assert.deepEqual(filter(isPrime,[5]),[5]);
    assert.deepEqual(filter(isPrime,[6]),[]);
  });
  it("should work with multiple elements in input array",function() {
    assert.deepEqual(filter(isPrime,[0,4,5,7]),[5,7]);
    assert.deepEqual(filter(isOdd,[-2,-3,-4,7,5,4]),[-3,7,5]);
    assert.deepEqual(filter(isEven,[-2,-3,-4,7,5,4]),[-2,-4,4]);
  });
});

//---------------------------- Map ---------------------------------//
describe("Map",function(){
  it("should work with empty input array",function() {
    assert.deepEqual(map(increment_5,[]),[]);
    assert.deepEqual(map(generateStars,[]),[]);
    assert.deepEqual(map(mapLength,[]),[]);
  });
  it("should work with a single element in input array",function() {
    assert.deepEqual(map(generateStars,[2]),["**"]);
    assert.deepEqual(map(generateStars,[1]),["*"]);
    assert.deepEqual(map(increment_5,[4]),[9]);
    assert.deepEqual(map(increment_5,[3]),[8]);
    assert.deepEqual(map(mapLength,["musta"]),[5]);
    assert.deepEqual(map(mapLength,["sai ganesh"]),[10]);
  });
  it("should work with multiple elements in input array",function() {
    assert.deepEqual(map(mapLength,["affi","rahul","shubham"]),[4,5,7]);
    assert.deepEqual(map(increment_5,[-2,-14,7,5]),[3,-9,12,10]);
    assert.deepEqual(map(generateStars,[2,3,4,"musta"]),["**","***","****","*****"]);
  });
});



