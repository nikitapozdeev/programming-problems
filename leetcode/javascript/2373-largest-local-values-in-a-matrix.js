/**
 * https://leetcode.com/problems/largest-local-values-in-a-matrix
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length;
  const matrix = new Array(n - 2).fill().map(() => new Array(n - 2).fill(-Infinity));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      for (let drow = row; drow < row + 3; drow++) {
        for (let dcol = col; dcol < col + 3; dcol++) {
          matrix[row][col] = Math.max(matrix[row][col], grid[drow][dcol]);
        }
      }
    }
  }

  return matrix;
};