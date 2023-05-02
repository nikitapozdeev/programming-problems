/**
 * https://leetcode.com/problems/sign-of-the-product-of-an-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let sign = 1;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    }

    if (num < 0) {
      sign *= -1;
    }
  }

  return sign;
};