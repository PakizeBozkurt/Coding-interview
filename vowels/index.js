// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Regex(Regular expression) way
function vowels(str) {

    const matches = str.match(/[aeiou]/gi);
    //Ternary operator
    return matches ? matches.length : 0;
}


//Itirate way
// function vowels(str) {
//   let count = 0;
//   const checker = ['a','e', 'i', 'o', 'u'];
  
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//         count++;
//     }
//   }

//   return count;
// }

//The function vowels takes a parameter str, which represents the input string we want to count the vowels in.

//It declares a variable count and initializes it to 0. 
//This variable will keep track of the number of vowels found in the string.

//It creates an array checker that contains the vowels ['a', 'e', 'i', 'o', 'u'].

//The function enters a loop using the for...of loop syntax. 
//It iterates over each character char of the input string str, which is converted to lowercase using the toLowerCase() method. 
//This ensures that both uppercase and lowercase vowels are counted correctly.

//Inside the loop, there is an if statement that checks whether the current character char is included in the checker array using the includes() method.
// If it is, that means the character is a vowel, and the count variable is incremented by 1.

//After iterating over all the characters in the string, the function exits the loop.

// Finally, the function returns the value of the count variable, which represents the total count of vowels found in the input string.


module.exports = vowels;
