/**
 * https://leetcode.com/problems/matrix-diagonal-sum
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0;
  let len = mat.length;
  for (let i = 0; i < len; i++) {
    sum += mat[i][i];
    sum += mat[len - 1 - i][i];
  }

  if (len % 2 !== 0) {
    const mid = len >> 1;
    sum -= mat[mid][mid];
  }
  
  return sum;
};