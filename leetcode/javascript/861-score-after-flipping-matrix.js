/**
 * https://leetcode.com/problems/score-after-flipping-matrix
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 0) {
      for (let col = 0; col < cols; col++) {
        grid[row][col] ^= 1;
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    let onesCount = 0;
    for (let row = 0; row < rows && onesCount <= rows; row++) {
      onesCount += grid[row][col];
    }

    if (onesCount < rows - onesCount) {
      for (let row = 0; row < rows; row++) {
        grid[row][col] ^= 1;
      }
    }
  }

  let score = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      score += grid[row][col] << cols - col - 1;
    }
  }

  return score;
};