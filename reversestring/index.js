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
return str.split("").reduce((reversed, character) =>
  character + reversed
, "");
}

module.exports = reverse;
