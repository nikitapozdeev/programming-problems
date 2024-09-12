/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const map = {};
  for (const char of allowed) {
    map[char] = true;
  }

  const isConsistent = (word) => {
    for (const char of word) {
      if (!map[char]) {
        return false;
      }
    }

    return true;
  }

  let count = 0;
  for (const word of words) {
    count += isConsistent(word);
  }

  return count;
};