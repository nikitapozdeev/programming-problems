/**
 * https://leetcode.com/problems/maximal-rectangle
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const height = new Array(matrix[0].length + 1).fill(0);
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === '1') {
        height[col]++;
      } else {
        height[col] = 0;
      }
    }

    const stack = [-1];
    for (let col = 0; col <= matrix[row].length; col++) {
      while (stack.length && height[col] < height[stack[stack.length - 1]]) {
        const h = height[stack.pop()];
        const w = col - 1 - stack[stack.length - 1];
        const area = h * w;
        maxArea = Math.max(maxArea, area);
      }
      
      stack.push(col);
    }
  }

  return maxArea;
};