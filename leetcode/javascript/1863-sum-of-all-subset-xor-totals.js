/**
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  const dfs = (i, xor) => {
    if (i >= nums.length) {
      return xor;
    }

    return dfs(i + 1, xor ^ nums[i]) + dfs(i + 1, xor);
  }

  return dfs(0, 0);
};