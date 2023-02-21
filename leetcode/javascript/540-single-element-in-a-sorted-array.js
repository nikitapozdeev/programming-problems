/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = (low + high) >> 1;
    const suggest = nums[mid];

    const left = nums[mid - 1];
    const right = nums[mid + 1];

    if (suggest !== left && suggest !== right) {
      return suggest;
    }

    const leftLen = left === suggest ? mid - 1 : mid;
    if (leftLen % 2 === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};