/**
 * https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let max = 0;
  let length = 0;
  let streak = 0;

  for (const num of nums) {
    if (num > max) {
      max = num;
      length = 0;
      streak = 0;
    }
    
    if (num === max) {
      streak++;
    } else {
      streak = 0;
    }

    length = Math.max(length, streak);
  }

  return length;
};