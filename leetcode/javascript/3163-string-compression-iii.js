/**
 * https://leetcode.com/problems/string-compression-iii
 */

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  const parts = [];
  let repeats = 1;

  for (let i = 0; i < word.length; ++i) {
    if (word[i] !== word[i + 1] || repeats === 9) {
      parts.push(`${repeats}${word[i]}`);
      repeats = 1;
    } else {
      repeats++;
    }
  }

  return parts.join('');
};