/**
 * https://leetcode.com/problems/the-number-of-beautiful-subsets
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
  nums.sort((a, b) => a - b);
  const seen = {};

  const dfs = (i) => {
    if (i >= nums.length) {
      return 1;
    }

    let sum = dfs(i + 1);

    if (!seen[nums[i] - k]) {
      seen[nums[i]] = (seen[nums[i]] || 0) + 1;
      sum += dfs(i + 1);
      seen[nums[i]]--;
    }

    return sum;
  }

  return dfs(0, 0) - 1;
};