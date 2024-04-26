/**
 * https://leetcode.com/problems/minimum-falling-path-sum-ii
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
  const size = grid.length;

  for (let row = 1; row < size; row++) {
    let min1 = +Infinity;
    let min2 = +Infinity;
    let min1Index = null; 
    let min2Index = null;

    for (let i = 0; i < size; i++) {
      if (grid[row - 1][i] < min1) {
        min2 = min1;
        min2Index = min1Index;
        min1 = grid[row - 1][i];
        min1Index = i;
      } else if (grid[row - 1][i] < min2 && i !== min1Index) {
        min2 = grid[row - 1][i];
        min2Index = i;
      }
    }

    for (let col = 0; col < size; col++) {
      grid[row][col] += Math.min(
        min1Index !== col ? min1 : +Infinity, 
        min2Index !== col ? min2 : +Infinity
      );
    }
  }

  return grid[size - 1].reduce((min, curr) => Math.min(min, curr));
};