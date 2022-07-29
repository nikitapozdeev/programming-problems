/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let result = '';
  let word = '';
  let len = s.length;
  for (let i = 0; i <= len; i++) {
    if (i === len) {
      result = result + word;
    } else if (s[i] !== ' ') {
      word = s[i] + word;
    }  else {
      result = result + word + s[i];
      word = '';
    }
  }
  return result;
};