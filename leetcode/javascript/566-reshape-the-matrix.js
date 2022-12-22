/**
 * https://leetcode.com/problems/reshape-the-matrix
 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  const dr = mat.length;
  const dc = mat[0].length;
  if (r * c !== dr * dc) {
    return mat;
  }

  const answer = [...new Array(r)].map(() => new Array(c));
  for (let i = 0; i < r * c; i++) {
    answer[Math.floor(i / c)][i % c] = mat[Math.floor(i / dc)][i % dc];
  } 

  return answer;
};