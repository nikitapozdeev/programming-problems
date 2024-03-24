/**
 * https://leetcode.com/problems/find-the-duplicate-number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  let start = 0;
  while (start !== slow) {
    slow = nums[slow];
    start = nums[start];
  }

  return slow;
};