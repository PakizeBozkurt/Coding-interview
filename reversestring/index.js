// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //first way to reverse
  // let arr = str.split("");
  // let revArr = arr.reverse();
  // let revStr = revArr.join("");
  // return revStr;

  //second way to reverse
  // const arr = str.split("");
  // arr.reverse();
  // return arr.join("");

  //third way to reverse
//   return str.split("").reverse().join("");

// other way to reverse
//Create an empty string called 'reversed'
//for each character in the provided string
// Take the character and add it to the start of 'reversed'
// Return the variable 'reversed'
// let reversed = "";
// for (let character of str) {
//     reversed = reversed + character;
// }
// return reversed;

//another solution 
// return str.split("").reduce((reversed, character) =>
//   character + reversed
// , "");
debugger;
//add a 'debugger' statement in your function
//call the function manually
//at the terminal, run 'node inspect index.js'
//to continue execution of the file, press 'c' then 'enter'
//to launch a 'repl' session, type 'repl' then 'enter'
//to exit the 'repl', press Control + C
//short way
return str.split("").reduce((rev, char) => char + rev, "");
}
reverse('asfd');


//A function called reverse that takes a string str as input and returns the reversed version of that string. 

//The function uses the split("") method to convert the input string str into an array of individual characters. 
//The split("") method splits a string into an array of substrings, where each substring represents a single character of the original string.

//The reduce() method is called on the resulting array. 
//The reduce() method is used to reduce an array to a single value by applying a specified function to each element of the array.

//The callback function used in reduce() takes two parameters: 
//rev represents the accumulated value (the reversed string) and char represents the current character being iterated.

//Inside the callback function, it concatenates the current character char with the accumulated value rev. 
//By adding the current character at the beginning of the accumulated value, the resulting string will be the reverse of the original string.

//The reduce() method iterates over each character in the array, applying the concatenation operation to build the reversed string.

//Once the reduce() method finishes iterating over all characters, it returns the final accumulated value, which is the reversed string.

//The reversed string is then returned as the result of the reverse function.


module.exports = reverse;
