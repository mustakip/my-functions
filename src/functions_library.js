const filter = function(inputArray,inputFunction) {
  let filteredElementsArray = [];
  for(let index = 0;index < inputArray.length;index++) {
    if(inputFunction(inputArray[index]) == true ) {
      filteredElementsArray.push(inputArray[index]);
    }
  }
  return filteredElementsArray;
}

exports.filter = filter;
