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
module.exports = reverse;
