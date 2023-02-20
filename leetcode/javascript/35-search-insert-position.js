/**
 * https://leetcode.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) { 
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    const suggest = nums[mid];

    if (suggest === target) {
      return mid;
    }
    
    if (suggest < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return target < nums[mid] ? mid : mid + 1;
};