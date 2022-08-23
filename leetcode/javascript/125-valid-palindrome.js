/**
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (!isValidChar(s[start])) {
      start++;
      continue;
    }
    
    if (!isValidChar(s[end])) {
      end--;
      continue;
    }
    
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    
    start++;
    end--;
  }
  
  return true;
};
  
var isValidChar = function(c) {
  if (c >= '0' && c <= '9') {
    return true;
  }
  
  if (c >= 'a' && c <= 'z') {
    return true;
  }
  
  if (c >= 'A' && c <= 'Z') {
    return true;
  }
  
  return false;
}