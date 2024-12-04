/**
 * https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let s1 = 0;
  let s2 = 0;
  let charsetOffset = 'a'.charCodeAt(0);
  let charsetSize = 26;

  const getNextChar = (char) => {
    const nextCode = (char.charCodeAt(0) + 1 - charsetOffset) % charsetSize;
    return String.fromCharCode(charsetOffset + nextCode);
  }

  while (s1 < str1.length && s2 < str2.length) {
    if (str1[s1] === str2[s2] || getNextChar(str1[s1]) === str2[s2]) {
      s1++;
      s2++;
    } else {
      s1++;
    }
  }

  return s2 === str2.length;
};