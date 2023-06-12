/**
 * https://leetcode.com/problems/summary-ranges
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) {
    return [];
  }

  const ranges = [];
  let [start] = nums;
  let [end] = nums;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === undefined || nums[i] - nums[i - 1] > 1) {
      if (start === end) {
        ranges.push(`${start}`);
      } else {
        ranges.push(`${start}->${end}`);
      }
      start = nums[i];
    }
    end = nums[i];
  }

  return ranges;
};