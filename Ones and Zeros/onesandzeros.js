// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = (arr) => {
    //convert arr to string

    let str = arr.join('');
    
    return parseInt(str,2)
};

// let str = arr.join('');: This line combines all the elements in the input array arr into a single string, 
//effectively converting the binary digits into a string representation. 
// For example, if arr is [1, 0, 1], the resulting str would be '101'.

//parseInt(str, 2): This part of the code takes the string str and converts it into an integer (decimal) using the parseInt function.
// The second argument 2 specifies that the string should be treated as a binary number. 
//The function interprets the string '101' as a binary number and converts it to its decimal equivalent, which is 5.

//return parseInt(str, 2);: Finally, the calculated decimal number is returned as the result of the binaryArrayToNumber function.

console.log((binaryArrayToNumber([0,0,0,1])), //1
console.log((binaryArrayToNumber([0,0,1,1])),//2
console.log((binaryArrayToNumber([1,1,1,1])),//15
console.log((binaryArrayToNumber([0,1,1,0])))))) //1