// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n -1) + fib(n -2);
   }


// function fib(n) {
//   const result = [0, 1]; const result = [0, 1]; // In this line, an array named result is declared and initialized with the first two Fibonacci numbers, 0 and 1. 
                                                   // This array will be used to store the Fibonacci sequence as it is calculated.

//   for (let i = 2; i <= n; i++) { // This is a for loop that starts with i set to 2 and runs until i becomes equal to n. 
                                    // This loop will calculate and populate the result array with Fibonacci numbers starting from the third number (since the first two numbers are already in the array).
//     const a = result[i - 1];    // Inside the loop, a constant variable a is declared and assigned the value of the element at the (i - 1) index of the result array. 
                                   // This is the previous Fibonacci number in the sequence.
//     const b = result[i - 2];   // Another constant variable b is declared and assigned the value of the element at the (i - 2) index of the result array. 
                                  // This is the Fibonacci number before the previous one.

//     result.push(a + b);
//   }

//   return result[n];
// }
module.exports = fib;

