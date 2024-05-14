/**
 * https://leetcode.com/problems/path-with-maximum-gold
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = {};
  
  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return 0;
    if (grid[row][col] === 0) return 0;

    const visitedKey = `r${row}c${col}`;
    if (visited[visitedKey]) return 0;

    visited[visitedKey] = true;
    let gold = grid[row][col];

    for (const [drow, dcol] of directions) {
      const r = row + drow;
      const c = col + dcol;
      gold = Math.max(gold, grid[row][col] + dfs(r, c));
    }

    visited[visitedKey] = false;
    return gold;
  }

  let maxGold = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 0) {
        maxGold = Math.max(maxGold, dfs(row, col));
      }
    } 
  }

  return maxGold;
};