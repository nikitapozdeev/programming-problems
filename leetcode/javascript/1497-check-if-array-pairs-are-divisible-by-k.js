/**
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  const remainders = {};
  
  for (const num of arr) {
    const remainder = (num % k + k) % k;
    remainders[remainder] = (remainders[remainder] || 0) + 1; 
  }

  for (const num of arr) {
    const remainder = (num % k + k) % k;
    if (!remainder) {
      if (remainders[remainder] % 2 !== 0) {
        return false;
      }
    } else if (remainders[remainder] !== remainders[k - remainder]) {
      return false;
    }
  }

  return true;
};