/**
 * https://leetcode.com/problems/soup-servings
 */

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  const m = Math.ceil(n / 25);
  if (m >= 200) {
    return 1;
  }

  const cache = new Array(n + 1).fill().map(() => new Array(n + 1));

  const dfs = (i, j) => {
    if (i <= 0 && j <= 0) {
      return 0.5;
    }

    if (i <= 0) {
      return 1;
    }

    if (j <= 0) {
      return 0;
    }

    if (cache[i][j] !== undefined) {
      return cache[i][j];
    }

    cache[i][j] = (
        dfs(i - 4, j) + 
        dfs(i - 3, j - 1) + 
        dfs(i - 2, j - 2) + 
        dfs(i - 1, j - 3)
    ) / 4;

    return cache[i][j];
  }

  return dfs(m, m);
};