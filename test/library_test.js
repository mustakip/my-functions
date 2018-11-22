const assert = require("assert");
const {filter,map,reduce} = require("../src/functions_library.js");
const { isEven,
  isOdd,
  isPrime,
  increment_5,
  generateStars,
  mapLength,
  add,
  checkAscending,
  findGreater } = require("../src/callback_functions.js");

//-------------------------- Filter -------------------------------//

describe("Filter",function(){
  it("should return empty array for empty input array",function() {
    assert.deepEqual(filter(isOdd,[]),[]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isPrime,[]),[]);
  });
  it("should return empty array for input array with elements which are not truthy as per predicate",function() {
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isEven,[1,9,17]),[]);
    assert.deepEqual(filter(isOdd,[16]),[]);
    assert.deepEqual(filter(isOdd,[4,12,18]),[]);
    assert.deepEqual(filter(isPrime,[6]),[]);
    assert.deepEqual(filter(isPrime,[6,8,9]),[]);
  });
  it("should return the same array for input array with elements which are all truthy as per predicate", function () {
    assert.deepEqual(filter(isOdd,[5]),[5]);
    assert.deepEqual(filter(isOdd,[3,5]),[3,5]);
    assert.deepEqual(filter(isPrime,[5]),[5]);
    assert.deepEqual(filter(isPrime,[5,11,13]),[5,11,13]);
    assert.deepEqual(filter(isEven,[8]),[8]);
    assert.deepEqual(filter(isEven,[2,8,12]),[2,8,12]);
  });
  it("should return array with truty elements when mixed array is passed in", function () {
    assert.deepEqual(filter(isEven,[1,8,17]),[8]);
    assert.deepEqual(filter(isOdd,[9,12,18]),[9]);
    assert.deepEqual(filter(isPrime,[6,7,9]),[7]);
  });
});

//---------------------------- Map ---------------------------------//
describe("Map",function(){
  it("should return empty array for empty input array",function() {
    assert.deepEqual(map(increment_5,[]),[]);
    assert.deepEqual(map(generateStars,[]),[]);
    assert.deepEqual(map(mapLength,[]),[]);
  });
  it("should return array with arity 1 for arity of input array 1",function() {
    assert.deepEqual(map(generateStars,[2]),["**"]);
    assert.deepEqual(map(generateStars,[1]),["*"]);
    assert.deepEqual(map(increment_5,[4]),[9]);
    assert.deepEqual(map(increment_5,[3]),[8]);
    assert.deepEqual(map(mapLength,["musta"]),[5]);
    assert.deepEqual(map(mapLength,["sai ganesh"]),[10]);
  });
  it("should return array of the same arity as of the input array",function() {
    assert.deepEqual(map(mapLength,["affi","rahul","shubham"]),[4,5,7]);
    assert.deepEqual(map(increment_5,[-2,-14,7,5]),[3,-9,12,10]);
    assert.deepEqual(map(generateStars,[2,3,4,"musta"]),["**","***","****","*****"]);
  });
});

//---------------------------- Reduce ---------------------------------//

describe("Reduce", function () {
  describe("Without initializer",function() {
    it("should reduce single element array and return reduced value", function() {
      assert.deepEqual(reduce(add,[1]),1);
      assert.deepEqual(reduce(findGreater,[0]),0);
    });
    it("should reduce multiple elements array and return the reduced value", function () {
      assert.deepEqual(reduce(add,[1,3]),4);
      assert.deepEqual(reduce(findGreater,[0,-4]),0);
    });
  });
  describe("With initializer",function() {
    it("should reduce single element array with initializer and return reduced value", function() {
      assert.deepEqual(reduce(add,[1],1),2);
      assert.deepEqual(reduce(findGreater,[1],4),4);
      assert.equal(reduce(checkAscending,[1],{checkedNumber : 1,state : true}).state,true);
    });
    it("should reduce multiple elements array with initializer and return reduced value", function() {
      assert.deepEqual(reduce(add,[1,4,8],1),14);
      assert.deepEqual(reduce(findGreater,[1,5,7],4),7);
      assert.equal(reduce(checkAscending,[1,2,3,4,5],{checkedNumber : 1,state : true}).state,true);
    });
  });
});


