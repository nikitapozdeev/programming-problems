/**
 * https://leetcode.com/problems/spiral-matrix/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  const output = [];
  const height = matrix.length;
  const width = matrix[0].length;
  let steps = width * height;
  let row = 0;
  let col = 0;
  let direction = 1;

  // bounds
  let left = -1;
  let right = width;
  let top = -1;
  let bottom = height;
  
  // current bounds
  let boundX = right;
  let boundY = bottom;
  
  while (steps > 0) {
    output.push(matrix[row][col]);
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
    steps--;
  }
  return output;
};