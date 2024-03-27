/**
 * https://leetcode.com/problems/subarray-product-less-than-k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let left = 0;
  let product = 1;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }

    count += (right - left + 1);
  }

  return count;
};