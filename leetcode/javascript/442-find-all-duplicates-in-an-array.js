/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const duplicates = [];
  
  for (let num of nums) {
    num = Math.abs(num);
    if (nums[num - 1] < 0) {
      duplicates.push(num);
    }
    nums[num - 1] = -nums[num - 1];
  }

  return duplicates;
};