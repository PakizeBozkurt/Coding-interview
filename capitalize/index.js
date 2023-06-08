// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();
    
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();    
        } else {
            result += str[i];
        }
}
result += str[i];
return result;
}

///Explanation:
//A function called capitalize that takes a string str as input and capitalizes the first letter of each word in the string.

//let result = str[0].toUpperCase();: 
//It initializes the result variable with the first character of the input string str converted to uppercase. 
//This ensures that the first character of the result string is always capitalized.

//for (let i = 1; i < str.length; i++) { ... }: 
//It starts a loop that iterates over the characters of the input string str, starting from the second character (index 1). 
//The loop continues until the end of the string.

//if (str[i - 1] === ' ') { ... }: 
//It checks if the previous character (character at index i - 1) is a space. 
//If it is, it means that the current character str[i] is the first character of a new word.


//result += str[i].toUpperCase();: 
//If the previous character is a space, the current character is appended to the result string after converting it to uppercase. 
//This capitalizes the first character of each word.

//else { result += str[i]; }: 
//If the previous character is not a space, the current character is appended to the result string as is, without any capitalization

//result += str[i];: 
//The final line outside the loop is incomplete. 
//It seems like it was intended to add the last character of the input string to the result string. 
//return statement, the function will return the capitalized string as the result.
module.exports = capitalize;



// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }