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

module.exports = {isPrime,isEven,isOdd};
