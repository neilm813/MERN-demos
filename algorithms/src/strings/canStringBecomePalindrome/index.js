const str1 = '';
const expected1 = false;

const str2 = 'a';
const expected2 = true;

const str3 = 'ddaa';
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = 'dda';
const expected4 = true;
// Explanation: "dad"

const str5 = 'aaadd';
const expected5 = true;
// Explanation: "daaad"

const str6 = 'abc';
const expected6 = false;

/* 
What is it about a string that makes it POSSIBLE for it to become a palindrome if the characters were rearranged.
*/

/**
 * This same approach can be done with an array, using .indexOf instead
 * of .hasOwnProperty and .splice instead of delete, but it's much
 * slower that way because .indexOf and .splice would be a nested loops.
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */
function canStringBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const leftoverCharsMap = new Map();

  for (const char of str) {
    if (leftoverCharsMap.has(char)) {
      leftoverCharsMap.delete(char);
    } else {
      leftoverCharsMap.set(char, true);
    }
  }
  return leftoverCharsMap.size <= 1 ? true : false;
}
