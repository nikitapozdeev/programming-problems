/**
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const mins = new Array(rows).fill(+Infinity);
  const maxs = new Array(cols).fill(-Infinity);
  const lucky = [];

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      mins[row] = Math.min(mins[row], matrix[row][col]);  
      maxs[col] = Math.max(maxs[col], matrix[row][col]);  
    }
  }

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (mins[row] === matrix[row][col] && maxs[col] === matrix[row][col]) {
        lucky.push(matrix[row][col]);
      }
    }
  }

  return lucky;
};