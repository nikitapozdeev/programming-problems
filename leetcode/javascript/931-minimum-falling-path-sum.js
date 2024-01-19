/**
 * https://leetcode.com/problems/minimum-falling-path-sum
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const len = matrix.length;
  for (let row = 1; row < len; row++) {
    for (let col = 0; col < len; col++) {
      const upper = matrix[row - 1][col];
      const left = col > 0 ? matrix[row - 1][col - 1] : upper;
      const right = col < len - 1 ? matrix[row - 1][col + 1] : upper;
      matrix[row][col] += Math.min(left, right, upper);
    }
  }

  let min = +Infinity;
  for (let col = 0; col < len; col++) {
    min = Math.min(min, matrix[len - 1][col]);
  }

  return min;
};