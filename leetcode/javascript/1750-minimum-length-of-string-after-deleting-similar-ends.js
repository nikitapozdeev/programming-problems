/**
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const char = s[left];
   
    while (left <= right && s[left] === char) {
      left++;
    }

    while (right > left && s[right] === char) {
      right--;
    }
  }

  return right - left + 1;
};