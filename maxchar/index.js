// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/// Logic
// const string = "Hello There!"
// const chars = {};

// for (let char of string) {
// if (!chars[char]) {
//     chars[char] = 1;
// } else {
//     chars[char] ++;
// }
//Or falsely...
// chars[char] = chars[char] + 1 || 1;
// }

// chars;

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


//A function called maxChar that takes a string str as input and returns the character that appears most frequently in the string. 
//const charMap = {};: 
//It initializes an empty object charMap to store the count of each character in the string.

//let max = 0;: 
//It initializes a variable max to keep track of the maximum count of a character.

//let maxChar = "";: 
//It initializes a variable maxChar to store the character with the maximum count.


//for (let char of str) { ... }:
// It iterates over each character char in the input string str.

//if (charMap[char]) { ... } else { ... }: 
//It checks if the current character char is already a key in the charMap object. 
//If it exists, it increments the count of that character in charMap. 
//If it doesn't exist, it adds the character as a key to charMap with an initial count of 1.

//for (let char in charMap) { ... }: 
//It iterates over each key char in the charMap object.

//if (charMap[char] > max) { ... }: 
//It checks if the count of the current character char is greater than the current maximum count max.
// If true, it updates max with the new maximum count and assigns char to maxChar.


//return maxChar;: It returns the character with the maximum count.

//To find the character that appears most frequently in the given string. 
//It uses an object charMap to store the count of each character and then iterates over the charMap object 
//to find the character with the maximum count.

module.exports = maxChar;
