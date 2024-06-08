/**
 * https://leetcode.com/problems/continuous-subarray-sum
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const seen = { 0: -1 };
  let prefix = 0;
  
  for (let i = 0; i < nums.length; i++) {
    prefix = (prefix + nums[i]) % k;
    if (prefix in seen) {
      if (i - seen[prefix] > 1) {
        return true;
      }
    } else {
      seen[prefix] = i;
    }
  }

  return false;
};