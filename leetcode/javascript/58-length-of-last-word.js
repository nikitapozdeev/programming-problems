/**
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let length = 0;
  let i = s.length - 1;
  
  while (s[i] === ' ') {
    i--;
  }
  
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  
  return length;
};