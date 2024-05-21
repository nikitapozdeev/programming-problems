/**
 * https://leetcode.com/problems/subsets/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const sets = [];

  const dfs = (i, set) => {
    if (i >= nums.length) {
      sets.push([...set]);
      return;
    }

    dfs(i + 1, set);
    set.push(nums[i]);
    dfs(i + 1, set);
    set.pop();
  }

  dfs(0, []);
  return sets;
};