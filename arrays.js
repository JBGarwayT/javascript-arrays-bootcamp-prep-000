  var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
    ]
    
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift (element);
    return array;
  }
  
    function addElementToEndOfArray(array, element) {
    return [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push (element);
    return array;
  }
  
  function accessElementInArray(array, element) {
    return array[element];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array, element) {
    array.shift (element);
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
    return array.slice (1);
=======
    array.slice (0);
    return array;
>>>>>>> 88c0caee663c4809ae85a7dc461efeb3c848916c
  }
  
  function destructivelyRemoveElementFromEndOfArray(array, element) {
    array.pop (element);
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
<<<<<<< HEAD
    return array.slice (0, array.length -1 );
=======
    array.slice (1, array.length );
    return array;
>>>>>>> 88c0caee663c4809ae85a7dc461efeb3c848916c
  }
  
  
  
  