/**
 * https://leetcode.com/problems/number-of-increasing-paths-in-a-grid
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
  const mod = (1e9 + 7);
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Array(rows).fill().map(() => new Array(cols));
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const dfs = (i, j) => {
    if (cache[i][j]) {
      return cache[i][j];
    }

    cache[i][j] = 1;
    for (const [dx, dy] of directions) {
      const r = i + dy;
      const c = j + dx;
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        if (grid[r][c] < grid[i][j]) {
          cache[i][j] += dfs(r, c);
          cache[i][j] %= mod;
        }
      }
    }

    return cache[i][j];
  }

  let paths = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      paths += dfs(i, j);
    }
  }

  return paths % mod;
};