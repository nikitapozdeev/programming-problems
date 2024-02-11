/**
 * https://leetcode.com/problems/cherry-pickup-ii
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [-1, 0, 1];
  const cache = {};

  const dfs = (row, col1, col2) => {
    const cacheKey = `${row}-${col1}-${col2}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    if (col1 === col2 || Math.min(col1, col2) < 0 || Math.max(col1, col2) >= cols) {
      return 0;
    }

    if (row === rows - 1) {
      return grid[row][col1] + grid[row][col2];
    }

    let cherries = 0;
    for (const dcol1 of directions) {
      for (const dcol2 of directions) {
        cherries = Math.max(cherries, dfs(row + 1, col1 + dcol1, col2 + dcol2));
      }
    }

    cherries += grid[row][col1] + grid[row][col2];
    cache[cacheKey] = cherries;
    return cherries;
  }

  return dfs(0, 0, cols - 1);
};