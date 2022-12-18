/**
 * https://leetcode.com/problems/combination-sum
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const combinations = [];

  const dfs = (idx, combination, count) => {
    if (count === target) {
      combinations.push([...combination]);
      return;
    }

    if (idx > candidates.length - 1 || count > target) {
      return;
    }

    combination.push(candidates[idx]);
    dfs(idx, combination, count + candidates[idx]);
    combination.pop();
    dfs(idx + 1, combination, count);
  }

  dfs(0, [], 0);
  return combinations;
};