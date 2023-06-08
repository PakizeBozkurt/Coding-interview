// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//logic
// const word = "HI THERE!!!!!"
// word.replace(/[^\w]/g, "").toLocaleLowerCase();

function anagrams(stringA, stringB) {
return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

///Explanation:
//A function called anagrams that checks if two strings, stringA and stringB, are anagrams of each other. 
//An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
// The anagrams function takes two string parameters, stringA and stringB. 
//It compares the cleaned versions of both strings using the cleanString function. 
//If the cleaned versions are equal, it returns true, indicating that the strings are anagrams. 
//Otherwise, it returns false.

//str.replace(/[^\w]/g, ''): It uses a regular expression to remove any non-alphanumeric characters (symbols, spaces, punctuation) from the string str. 
//The [^...] pattern matches any character that is not in the specified range or set. \w represents any alphanumeric character, and ^\w matches any character that is not alphanumeric.
// The g flag ensures that this replacement is done globally throughout the string.

//.toLowerCase(): It converts the string to lowercase. This step helps in case-insensitive comparison.

//.split(''): It splits the string into an array of individual characters. 
//Each character becomes a separate element in the array.

//.sort(): It sorts the array of characters in ascending order based on their Unicode code points. 
//Sorting is necessary to compare the characters in a consistent manner.

//.join(''): It joins the sorted array of characters back into a string, with no separator between the characters.



//First way

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }


module.exports = anagrams;
