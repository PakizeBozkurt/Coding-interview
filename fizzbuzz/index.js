// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      //Is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

//A function called fizzBuzz that takes a number n as input and prints a specific string or number based on certain conditions. 

//for (let i = 1; i <= n; i++) { ... }: 
//It starts a loop that iterates from 1 to n, where n is the input number. 
//The loop variable i represents the current number being evaluated.

//if (i % 3 === 0 && i % 5 === 0) { ... }: 
//It checks if the current number i is divisible by both 3 and 5. 
//If true, it prints the string "fizzbuzz" using the console.log statement.

//else if (i % 3 === 0) { ... }: 
//If the previous condition is false, it checks if the current number i is divisible by 3. 
//If true, it prints the string "fizz" using the console.log statement.

//else if (i % 5 === 0) { ... }:
// If the previous conditions are false, it checks if the current number i is divisible by 5. 
//If true, it prints the string "buzz" using the console.log statement.

//else { ... }: 
//If none of the previous conditions are true, it executes the else block and prints the current number i using the console.log statement.

//The FizzBuzz problem requires printing numbers from 1 to n, 
//but for multiples of 3, "fizz" should be printed instead, 
//for multiples of 5, "buzz" should be printed, and for numbers 
//that are multiples of both 3 and 5, "fizzbuzz" should be printed.
//The fizzBuzz function accomplishes this by iterating over the numbers 
//from 1 to n and applying the necessary conditions to determine what should be printed. 
//It uses the modulus operator % to check for divisibility by 3 and 5.
module.exports = fizzBuzz;
