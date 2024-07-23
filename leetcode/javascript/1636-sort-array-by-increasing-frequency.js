/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const frequency = {};
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return nums.sort((a, b) => {
    if (frequency[a] === frequency[b]) {
      return b - a;
    }

    return frequency[a] - frequency[b];
  })
};