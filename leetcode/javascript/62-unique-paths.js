/**
 * https://leetcode.com/problems/unique-paths/
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let row = new Array(n).fill(1);
  
  for (let i = 0; i < m - 1; i++) {
    const bufRow = new Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      bufRow[j] = bufRow[j + 1] + row[j];
    }
    row = bufRow;
  }
  
  return row[0];
};