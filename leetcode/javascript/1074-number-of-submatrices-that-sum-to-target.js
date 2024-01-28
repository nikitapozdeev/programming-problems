/**
 * https://leetcode.com/problems/number-of-submatrices-that-sum-to-target
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const prefixSum = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
       const left = col > 0 ? prefixSum[row][col - 1] : 0;
       const top = row > 0 ? prefixSum[row - 1][col] : 0;
       const topLeft = Math.min(row, col) > 0 ? prefixSum[row - 1][col - 1] : 0; 
       prefixSum[row][col] = matrix[row][col] + top + left - topLeft;
    }
  }

  let total = 0;
  for (let row1 = 0; row1 < rows; row1++) {
    for (let row2 = row1; row2 < rows; row2++) {
      const remainders = {};
      remainders[0] = 1;
      
      for (let col = 0; col < cols; col++) {
        const sum = prefixSum[row2][col] - (row1 > 0 ? prefixSum[row1 - 1][col] : 0);
        const remainder = sum - target;
        total += (remainders[remainder] ?? 0);
        remainders[sum] = (remainders[sum] ?? 0) + 1;
      }
    }
  }

  return total;
};