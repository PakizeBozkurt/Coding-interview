// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

}
/// Logic
const string = "Hello There!"
const chars = {};

for (let char of string) {
    if (!chars[char]) {
        chars[char] = 1;
    } else {
        chars[char] ++;
    }
}

chars;
module.exports = maxChar;
