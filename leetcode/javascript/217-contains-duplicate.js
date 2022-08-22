/**
 * https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const seen = {};
  for (const num of nums) {
    if (num in seen) {
      return true;
    }
    seen[num] = 1;
  }
  return false;
};