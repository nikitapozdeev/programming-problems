/**
 * https://leetcode.com/problems/minimum-path-sum
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row > 0 && col > 0) {
        grid[row][col] += Math.min(grid[row][col - 1], grid[row - 1][col]);
      } else if (row > 0) {
        grid[row][col] += grid[row - 1][col];
      } else if (col > 0) {
        grid[row][col] += grid[row][col - 1];
      } 
    }
  }

  return grid[rows - 1][cols - 1];
};