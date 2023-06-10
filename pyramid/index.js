// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// First way
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//   console.log(level);
//   }
// }


function pyramid(n, row = 0, level = '') {
if (row === 0) {
    return;
}

if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
}

const midpoint = Math.floor((2 * n -1) /2);
let add;
if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
} else {
    add = ' ';
}
}

//A function called pyramid that prints a pyramid pattern of n rows using # and spaces. 


//The pyramid function takes three parameters:
// n represents the number of rows in the pyramid, row keeps track of the current row being processed, 
//and level is a string that holds the characters of the current row.

//The code checks if row is equal to 0.
// If it is, the function immediately returns without doing anything. 
//This is likely a mistake, as it prevents the function from executing any code.

//The code then checks if the length of level is equal to 2 * n - 1,
// which represents the length of a complete row in the pyramid. 
//If it is, it means that the current row is complete and level contains all the characters for that row.
// In this case, it prints level using console.log() and then recursively calls the pyramid function to move on to the next row by incrementing row by 1.

//If the conditions in the previous step are not met, the code calculates the midpoint of the row. 
//The midpoint is the index of the middle character in the row.

//The code then checks if the current position in the row (level.length) is within the range of characters that should be filled with # symbols.
// This range is determined by comparing the midpoint with row. If the current position is within this range, the add variable is set to '#'. Otherwise, it is set to a space ' '.

//The code doesn't have any further instructions or a return statement, so it doesn't perform any action or return any value.

module.exports = pyramid;
