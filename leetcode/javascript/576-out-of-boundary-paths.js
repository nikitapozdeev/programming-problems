/**
 * https://leetcode.com/problems/out-of-boundary-paths
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  const mod = 1e9 + 7;
  const cache = {};

  const dfs = (row, col, moves) => {
    if (row < 0 || row === m || col < 0 || col === n) {
      return 1;
    }

    if (moves === 0) {
      return 0;
    }

    const cacheKey = `${row}-${col}-${moves}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    cache[cacheKey] = (
        (dfs(row + 1, col, moves - 1) +
        dfs(row - 1, col, moves - 1)) % mod +
        (dfs(row, col + 1, moves - 1) + 
        dfs(row, col - 1, moves - 1)) % mod
    ) % mod;

    return cache[cacheKey];
  }

  return dfs(startRow, startColumn, maxMove);
};