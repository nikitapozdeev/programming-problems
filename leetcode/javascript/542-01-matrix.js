/**
 * https://leetcode.com/problems/01-matrix
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const queue = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col]);
      } else {
        mat[row][col] = -1;
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();
    for (const [dr, dc] of directions) {
      const ddr = row + dr;
      const ddc = col + dc;
      if (ddr < 0 || ddc < 0 || ddr >= rows || ddc >= cols || mat[ddr][ddc] !== -1) {
        continue;
      }

      mat[ddr][ddc] = mat[row][col] + 1;
      queue.push([ddr, ddc]);
    }
  }

  return mat;
};