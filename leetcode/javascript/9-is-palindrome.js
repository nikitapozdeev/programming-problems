/**
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * Time: O(n)
 * Memory: O(n)
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

/**
 * Follow up solution
 * Time: O(n)
 * Memory: O(1)
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let divider = 1;
  while (x >= divider * 10) {
    divider *= 10;
  }

  while (x) {
    const a = x % 10;
    const b = Math.floor(x / divider);
    
    if (a !== b) {
      return false;
    }

    x = Math.floor((x % divider) / 10);
    divider /= 100;
  }
 
  return true;
};