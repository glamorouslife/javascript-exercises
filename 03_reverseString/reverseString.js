const reverseString = function(word) {
    splittedWord=word.split("")
    console.log(splittedWord)
    reversedSplittedWord=splittedWord.reverse()
    console.log(reversedSplittedWord)
    joinCharacters=reversedSplittedWord.join("")
    console.log(joinCharacters)
    return joinCharacters

};



// Do not edit below this line
module.exports = reverseString;
