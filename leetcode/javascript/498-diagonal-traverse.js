/**
 * https://leetcode.com/problems/diagonal-traverse/
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
  const output = [];
  const width = mat[0].length;
  const height = mat.length;
  const steps = width * height;
  let row = 0;
  let col = 0;
  let direction = -1;
  
  for (let i = 0; i < steps; ++i) {    
    if (row >= 0 && row < height && col >= 0 && col < width) {
      output.push(mat[row][col]);
      row += direction;
      col -= direction;
    }
    
    if (col >= width) {
      direction = 1;
      row += 2 * direction;
      col -= direction;
    } else if (row < 0) {
      direction = 1;
      row += direction;
    }
    
    if (row >= height) {
      direction = -1;
      row += direction;
      col -=  2 * direction;
    } else if (col < 0) {
      direction = -1;
      col -= direction;
    }
  }
  
  return output;
};