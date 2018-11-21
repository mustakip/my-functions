const filter = function(predicate,inputArray) {
  let filteredElementsArray = [];
  for(let index = 0;index < inputArray.length;index++) {
    if(predicate(inputArray[index]) == true ) {
      filteredElementsArray.push(inputArray[index]);
    }
  }
  return filteredElementsArray;
}

exports.filter = filter;

//-----------------------------------------------------------------------//

const map = function(mapper,inputArray) {
  let mappedArray = [];
  for(let index = 0; index < inputArray.length; index++) {
    mappedArray.push(mapper(inputArray[index]));
  }
  return mappedArray;
}

exports.map = map;

//-----------------------------------------------------------------------//

const reduce = function(reducer,inputArray,initializer) {
  let index = 0;
  if(initializer == undefined) {
    initializer = inputArray[0];
    index = 1;
  }
  for(index; index < inputArray.length; index++) {
    initializer = reducer(initializer,inputArray[index]);
  }
  return initializer;
}

exports.reduce = reduce;

