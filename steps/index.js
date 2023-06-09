// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let colm = 0; colm < n; colm++) {
      if (colm <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

//A function called steps that takes a number n as input and prints a staircase pattern with n steps. 

//The function uses a for loop to iterate over each row of the staircase.
// The loop variable row starts from 0 and continues as long as row is less than n.

//Inside the outer for loop, a variable called stair is defined as an empty string. 
//This variable will hold the characters for each row of the staircase.

//There is an inner for loop that iterates over each column within a row. 
//The loop variable colm starts from 0 and continues as long as colm is less than n.

//Inside the inner for loop, an if statement is used to determine whether to add a # character or a space character to the stair string.
// If colm is less than or equal to row, it means we are on or before the diagonal of the staircase, so a # is added to the stair string. Otherwise, a space is added.

//After the inner for loop finishes iterating over the columns of the current row, the stair string contains the characters for that row.

//The console.log() function is called to print the stair string, which represents the current row of the staircase.

//The outer for loop continues to the next iteration, incrementing row by 1, and the process is repeated for the remaining rows.

//Once the outer for loop finishes iterating over all the rows, the function completes execution.


module.exports = steps;

//function steps(n) {
//     for (let row = 0; row < n; row++) {
// let stair = '';

// for (let colm = 0; colm < n; colm++) {
//     if(colm <= row) {
//         stair += '#';
//     } else {
//         stair += ' ';
//     }
// }
// console.log(stair);
//     }
// }
