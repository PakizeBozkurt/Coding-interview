// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //second way every function
    return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
    });

    
}

//A function called palindrome that checks whether a given string str is a palindrome or not. 
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

//The palindrome function takes a string str as an input.

//It uses the split('') method on the input string to convert it into an array of individual characters. 
//The split('') method splits a string into an array of substrings, where each substring represents a single character of the original string.

//The every method is then called on the resulting array. 
//The every method tests whether all elements in the array pass a specific condition. In this case, it checks whether every character in the array matches a corresponding character from the end of the array.

//The every method takes a callback function as an argument.
// The callback function is invoked for each element in the array.

//The callback function receives two parameters: 
//char represents the current character being iterated, and i represents the index of the current character in the array.

//Inside the callback function, it compares the current character char with the character
// at the corresponding index from the end of the array, str[str.length - i - 1].

//If the characters match for every pair of corresponding indices, 
//the every method will continue to iterate over the remaining characters. 
//However, if at least one pair of characters doesn't match, 
//the every method will immediately return false.

//If the every method successfully iterates through the entire array 
//and all characters match their corresponding pairs, it will return true.

//The return statement in the palindrome function returns the result of the every method. 
//If the every method returned true, it means the input string is a palindrome. 
//If it returned false, the input string is not a palindrome.


// function palindrome(str) {
//   //first way
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
module.exports = palindrome;
