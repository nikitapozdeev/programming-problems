/**
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();
  let a = 0;
  let b = str.length - 1;
  while (a < b) {
    if (str[a] !== str[b]) {
      return false;
    }
    a++;
    b--;
  }
  return true;
};