// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapA = converter(stringA)
    const mapB = converter(stringB)

    if(Object.keys(mapA).length !== Object.keys(mapB).length){
        return false;
    }

    for(let char in mapA){
        if(mapA[char] !== mapB[char]){
            return false
        }
    }
    return true
}

function converter(str){
    const charMap = {}

    for(let word of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[word] = charMap[word] +1 || 1
    }
    return charMap;
}

module.exports = anagrams;
