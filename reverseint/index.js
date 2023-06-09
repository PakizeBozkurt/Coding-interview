// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

//   if(n < 0 ) {
//       return parseInt(reversed) * -1;
//   }
//or using Math.sign

  return parseInt(reversed) * Math.sign(n);
}


//A function called reverseInt that takes an integer n as input and returns the reverse of that integer. 

//The function first converts the input integer n to a string using the toString() method.

//It then splits the string into an array of individual characters using the split("") method.

//The reverse() method is called on the resulting array to reverse the order of the characters.

//The join("") method is used to join the reversed array of characters back into a string.

//The reversed string is then parsed into an integer using the parseInt() function.

//The code multiplies the parsed reversed integer by the sign of the original integer n using Math.sign(n). 
//This step ensures that the reversed integer retains the original sign of n.

//Finally, the reversed and signed integer is returned as the result of the reverseInt function.


module.exports = reverseInt;
