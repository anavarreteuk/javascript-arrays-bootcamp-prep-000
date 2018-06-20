var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) { 
 return [element, ...array]
  }
  
function destructivelyAddElementToBeginnigOfArray(array, element) {
return  (array.unshift(element))
}