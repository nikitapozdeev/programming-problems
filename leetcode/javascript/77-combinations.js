/**
 * https://leetcode.com/problems/combinations
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const combinations = [];

  const dfs = (i, combination) => {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    for (let j = i; j <= n; j++) {
      combination.push(j);
      dfs(j + 1, combination);
      combination.pop();
    }
  }

  dfs(1, []);
  return combinations;
};