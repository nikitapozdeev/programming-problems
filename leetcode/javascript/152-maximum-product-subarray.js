/**
 * https://leetcode.com/problems/maximum-product-subarray
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let product = nums.reduce((acc, curr) => acc = Math.max(acc, curr), nums[0]);
  let currMin = 1;
  let currMax = 1;

  for (const num of nums) {
    if (num === 0) {
      currMin = currMax = 1;
      continue;
    }

    const tmpMax = num * currMax;
    currMax = Math.max(num, tmpMax, num * currMin);
    currMin = Math.min(num, tmpMax, num * currMin);
    product = Math.max(product, currMax);
  }

  return product;
};