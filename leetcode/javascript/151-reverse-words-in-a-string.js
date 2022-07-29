/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let result = '';
  let lettersCount = 0;
  let len = s.length;
  for (let i = 0; i <= len; i++) {
    if (s[i] === ' ' || i === len) {
      if (lettersCount > 0) {
        const word = s.substring(i - lettersCount, i);
        if (result === '') {
          result = word;
        } else {
          result = word + ' ' + result;
        }
        lettersCount = 0;
      } 
      continue;
    }
    
    lettersCount++;
  }
  
  return result;
};