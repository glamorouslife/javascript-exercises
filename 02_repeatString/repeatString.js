const repeatString = function(word, numRepetition) {
    if (numRepetition<0){
        return "ERROR"
    }else{
    return word.repeat(numRepetition)
    }
}
     

console.log(repeatString("hey", 6))
    


// Do not edit below this line
module.exports = repeatString;
