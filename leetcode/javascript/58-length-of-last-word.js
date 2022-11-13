/**
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let isWord = false;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = s.length; i >= 0; i--) {
    if (!isWord) {
      if (s[i - 1] !== ' ') {
        isWord = true;
        startIndex = i;
      }
      continue;
    }
    
    if (s[i - 1] === ' ') {
      endIndex = i;
      break;
    }
  }  
  
  return startIndex - endIndex;
};