/**
 * https://leetcode.com/problems/product-of-array-except-self
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  const output = new Array(len).fill(1);

  let prefix = 1;
  for (let i = 0; i < len; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = len - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
};