/**
 * https://leetcode.com/problems/kth-distinct-string-in-an-array
 */

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const count = {};
  for (const char of arr) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of arr) {
    if (count[char] === 1) {
      k--;
    }

    if (k === 0) {
      return char;
    }
  }

  return "";
};