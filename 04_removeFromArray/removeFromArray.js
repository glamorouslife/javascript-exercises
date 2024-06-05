function removeElementFromArray(ourArray, element) {
    for (let i = 0; i < ourArray.length; i++) {
        if (ourArray[i] === element) { // Check if the current element is the one to be removed
            elementToBeRemoved=element
            ourArray.splice(i, 1); // Remove the element at index i
            if (ourArray[i] === elementToBeRemoved){
                ourArray.splice(ourArray.indexOf(element), 1);
            }
            break; // Exit the loop after removing the element
        }
    }
}

const removeFromArray = function(ourArray,...manyMoreArgs) {
    
    
    for (const element of manyMoreArgs){ //go through the other elements apart from array
        if (ourArray.includes(element)){ //check whether we have the same element in the array
            removeElementFromArray(ourArray, element);   
        
        }
    
      }
      return ourArray;
    }

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))



// Do not edit below this line
module.exports = removeFromArray;
