/**
 * https://leetcode.com/problems/majority-element
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let major = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      major = num;
    }
    count += num === major ? 1 : -1;
  }

  return major;
};