// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

// loop through array values in array
//compare each value to each value in the array
// if the sum of these two is 0, end function returning true.
//if loop finishes without becoming true, return false
// const addToZero = (array, num) => {

//    for (let i = 0; i < array.length; i++)
 //       for (let j = 0; j < array.length; j++){
 //       if (array[i] + array[j] === 0){
//       return true
//   } 
//  }

     return false
//}
// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

// RUNTIME COMPLEXITY: O(n^2) because of nested loops
// SPACE COMPLEXITY: Quadratic

//////////////////////////////////////////

// 2) Unique
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

// const hasUniqueChars = (string) => {
     
//     let maxChar = 256

//     if (string.length > maxChar)
//         return false

//     let chars = new Array(maxChar)

//     for (let i = 0; i < maxChar; i++){
//         chars[i] = false
//     }    

//     for (let i = 0; i < string.length; i++) {
//         let index = string[i].charCodeAt()

//         if (chars[index] === true)
//             return false

//         chars[index] = true    
//     }
//     return true
// }

// console.log(hasUniqueChars('Monday'))
// console.log(hasUniqueChars('Moonday'))

// RUNTIME COMPLEXITY: O(n) because it cannot be greater than 256 characters from the beginning; giving it a specific max loop of 256 plus no nested for loops.
// SPACE COMPLEXITY: linear


///////////////////////////////////////////////////////////////

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

// const isPangram = (string) => {

//     let strArr = string.toLowerCase()

//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

//     for(let i = 0; i<alphabet.length; i++) {
//         if(strArr.indexOf(alphabet[i]) < 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

// runtime complexity: O(n^2) because we loop through the alphabet and nested inside that we run indexOf() method  which has a time complexity of O(n). If they were not nested then it would be O(n)
// space complexity: quadratic

///////////////////////////////////////////////////////////

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

const findLongestWord = (array) => {

    let longest = ""

    for( let i = 0; i< array.length; i++) {
        if( array[i].length > longest.length) {
            longest = array[i]
        }
    }

    return longest.length

}
//console.log(findLongestWord(["hi", "hello"]))

//Runtime complexity: O(n) because we are looping through an array which can change in size at anytime
//space complexity: linear
