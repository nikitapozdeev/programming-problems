/**
 * https://leetcode.com/problems/word-pattern
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = {};
  const seenWords = new Set();
  const sArr = s.split(' ');

  if (pattern.length !== sArr.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const word = sArr[i];
    const patternChar = pattern[i];
    if (!words[patternChar]) {
      if (seenWords.has(word)) {
        return false;
      }
      words[patternChar] = word;
      seenWords.add(word);
    } else {
      if (words[patternChar] !== word) {
        return false;
      }
    }
  }

  return true;
};