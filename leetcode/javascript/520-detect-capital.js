/**
 * https://leetcode.com/problems/detect-capital
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let allUpper = true;
  for (const char of word) {
    if (!isUpperCased(char)) {
      allUpper = false;
      break;
    }
  }

  let allLower = true;
  for (const char of word) {
    if (isUpperCased(char)) {
      allLower = false;
      break;
    }
  }

  let firstUpper = isUpperCased(word[0]);
  for (let i = 1; i < word.length; i++) {
    if (isUpperCased(word[i])) {
      firstUpper = false;
      break;
    }
  }

  return allUpper || allLower || firstUpper;
};

const isUpperCased = (char) => char === char.toUpperCase();