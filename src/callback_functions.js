const library = require("../../patterns/src/pattern_util.js");
let {repeatStars} = library;
const isEven = function(element) {
  return element % 2 == 0;
}

const isPrime = function(element) {
  let count = 0;
  let message = true;
  for(let divisor =1; divisor <= Math.sqrt(element); divisor++) {
    if(element % divisor == 0) {
      count++;
    }
  }
  if(count > 1 || element == 0){
    message = false;
  }
  return message;
}

const compliment = function(inputFunction) {
  return function(element) {
    return !inputFunction(element);
  }
}

const isOdd = compliment(isEven);
//-----------------------------------------------------------------------//
const increment_5 = function(element) {
  return element + 5;
}

const mapLength = function(element) {
  return element.length;
}

const generateStars = function(noOfStars) {
  noOfTimes = noOfStars.length || noOfStars;
  return repeatStars(noOfTimes);
}


//-----------------------------------------------------------------------//
module.exports = {isPrime,isEven,isOdd,increment_5,mapLength,generateStars};







