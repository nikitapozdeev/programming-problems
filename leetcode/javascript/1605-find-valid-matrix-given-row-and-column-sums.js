/**
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums
 */

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const rows = rowSum.length;
  const cols = colSum.length;
  const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      matrix[row][col] = Math.min(rowSum[row], colSum[col]);
      rowSum[row] -= matrix[row][col];
      colSum[col] -= matrix[row][col];
    }
  }
  
  return matrix;
};