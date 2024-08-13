/**
 * https://leetcode.com/problems/combination-sum-ii
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combinations = [];

  const dfs = (i, sum, picks) => {
    if (sum === target) {
      combinations.push([...picks]);
      return;
    }
    
    if (sum > target) {
      return;
    }

    if (i >= candidates.length) {
      return;
    }
    
    picks.push(candidates[i]);
    sum += candidates[i];

    dfs(i + 1, sum, picks);
    
    picks.pop();
    sum -= candidates[i];

    let next = i;
    while (next < candidates.length && candidates[next] === candidates[i]) {
      next++;
    }

    dfs(next, sum, picks);
  }

  dfs(0, 0, []);

  return combinations;
};