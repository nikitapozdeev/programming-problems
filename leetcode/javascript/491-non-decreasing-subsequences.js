/**
 * https://leetcode.com/problems/non-decreasing-subsequences
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const sequences = new Set();
  const sequence = [];

  const backtrack = (index) => {
    if (index === nums.length) {
      if (sequence.length >= 2) {
        sequences.add(JSON.stringify(sequence));
      }
      return;
    }

    if (sequence.length === 0 || sequence[sequence.length - 1] <= nums[index]) {
      sequence.push(nums[index]);
      backtrack(index + 1);
      sequence.pop();
    }
    backtrack(index + 1);
  }

  backtrack(0);
  return Array.from(sequences).map(JSON.parse);
};