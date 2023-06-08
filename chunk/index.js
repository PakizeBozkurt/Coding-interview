// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
 const chunked = [];
 let i = 0;

 while (i < array.length) {
     chunked.push(array.slice(i, i + size));
     i += size;
 }

 return chunked;
}

//A function called chunk that takes an array array and a size size as input and splits the array into smaller chunks of the specified size. 
//const chunked = [];: 
//It initializes an empty array called chunked. 
//This array will store the chunks of the input array.

//let i = 0;: 
//It initializes a variable i to 0. 
//This variable will keep track of the current position while iterating over the input array.

//while (i < array.length) { ... }: 
//It starts a loop that continues until the value of i is less than the length of the input array. 
//This loop will iterate over the elements of the array.

//chunked.push(array.slice(i, i + size));: 
//It uses the slice method to extract a portion of the input array starting from the index i and ending at i + size. 
//The extracted portion represents a chunk of the specified size. 
//This chunk is then added to the chunked array using the push method.

//i += size;: It increments the value of i by the specified size, moving the current position to the next chunk in the array.

//return chunked;: 
//After the loop completes, the function returns the chunked array containing all the chunks of the input array.

//The chunk function divides the input array into smaller chunks of the specified size and returns an array of arrays, where each inner array represents a chunk.


//First way
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

module.exports = chunk;
