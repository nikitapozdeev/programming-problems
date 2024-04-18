/**
 * https://leetcode.com/problems/island-perimeter
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const visited = {};
  
  const dfs = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return 1;
    }

    const key = (row << 8) ^ col;
    if (visited[key]) {
      return 0;
    }

    if (grid[row][col] === 0) {
      return 1;
    }

    visited[key] = true;

    return dfs(row + 1, col) +
           dfs(row, col + 1) +
           dfs(row - 1, col) + 
           dfs(row, col - 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        return dfs(row, col);
      }
    }
  }
};