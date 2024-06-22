/**
 * https://leetcode.com/problems/count-number-of-nice-subarrays
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let sum = 0;
  let arrays = 0;
  const prefix = { [sum]: 1 };
  
  for (const num of nums) {
    sum += num % 2;
    if ((sum - k) in prefix) {
      arrays += prefix[sum - k];
    }
    prefix[sum] = (prefix[sum] || 0) + 1;
  }

  return arrays;
};