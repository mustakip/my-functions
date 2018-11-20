const filter = function(callbackFunction,inputArray) {
  let filteredElementsArray = [];
  for(let index = 0;index < inputArray.length;index++) {
    if(callbackFunction(inputArray[index]) == true ) {
      filteredElementsArray.push(inputArray[index]);
    }
  }
  return filteredElementsArray;
}

exports.filter = filter;

//-----------------------------------------------------------------------//

const map = function(callbackFunction,inputArray) {
  let mappedArray = [];
  for(let index = 0; index < inputArray.length; index++) {
    mappedArray.push(callbackFunction(inputArray[index]));
  }
  return mappedArray;
}

exports.map = map;

//-----------------------------------------------------------------------//


