/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  let count = 0;
  for (let row = 0; row < height; row++) {
    let low = 0;
    let high = width - 1;
    while (low <= high) {
      const col = Math.floor((low + high) / 2);
      if (grid[row][col] >= 0) {
        low = col + 1;
      } else {
        high = col - 1;
      }
    }
    count += (width - low);
  }
  return count;
};