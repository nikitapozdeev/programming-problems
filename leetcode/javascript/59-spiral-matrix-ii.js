/**
 * https://leetcode.com/problems/spiral-matrix-ii
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const size = n * n;
  const matrix = ([...new Array(n)]).map(() => new Array(n));
  let row = 0;
  let col = 0;
  let direction = 1;

  // bounds
  let left = -1;
  let right = n;
  let top = -1;
  let bottom = n;

  // current bounds
  let boundX = right;
  let boundY = bottom;

  for (let i = 1; i <= size; i++) {
    matrix[row][col] = i;
    // go to right boundary
    if (col + direction !== boundX) {
      col += direction;
    } 
    // go to bottom boundary
    else if (row + direction !== boundY) {
      row += direction;
    } 
    // switch direction
    else {
      if (direction === 1) {
        top++;
        right--;
        boundX = left;
        boundY = top;
        direction = -1;
      } else {
        bottom--;
        left++;
        boundX = right;
        boundY = bottom;
        direction = 1;
      }
      col += direction;
    }
  }
  return matrix;
};