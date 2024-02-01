/**
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
  nums.sort((a, b) => a - b);

  const output = [];
  for (let i = 0; i < nums.length; i += 3) {
    const a = nums[i];
    const b = nums[i + 1];
    const c = nums[i + 2];
    if ((c - a) > k) {
      return [];
    }

    output.push([a, b, c]);
  }

  return output;
};