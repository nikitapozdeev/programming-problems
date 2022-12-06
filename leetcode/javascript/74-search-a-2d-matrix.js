/**
 * https://leetcode.com/problems/search-a-2d-matrix
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let low = 0;
  let high = (rows * cols) - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const guess = matrix[row][col];
    if (guess === target) {
      return true;
    } else if (guess < target) {
      low = mid + 1;
    } else if (guess > target) {
      high = mid - 1;
    }
  }
  return false;
};