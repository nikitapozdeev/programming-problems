/**
 * https://leetcode.com/problems/rotate-image/
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const len = matrix.length;
  // transpose
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  // reflect
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = tmp;
    }
  }
};