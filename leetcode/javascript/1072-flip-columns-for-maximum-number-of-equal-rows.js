/**
 * https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const counter = {};
  let pattern = new Array(matrix[0].lenght);

  for (let r = 0; r < matrix.length; ++r) {
    for (let c = 0; c < matrix[r].length; ++c) {
      pattern[c] = matrix[r][c] === matrix[r][0] ? 'T' : 'F';
    }
    const key = pattern.join('');
    counter[key] = (counter[key] || 0) + 1;
  }

  let max = 0;
  for (const count of Object.values(counter)) {
    max = Math.max(max, count);
  }

  return max;
};