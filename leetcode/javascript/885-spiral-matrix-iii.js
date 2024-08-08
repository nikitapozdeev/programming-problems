/**
 * https://leetcode.com/problems/spiral-matrix-iii
 */

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const output = [];
  let facings = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let facingIndex = 0;
  let distance = 1;

  while (output.length !== rows * cols) {
    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < distance; ++j) {
        if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
          output.push([rStart, cStart]);
        }

        rStart += facings[facingIndex][0];
        cStart += facings[facingIndex][1];
      }
      facingIndex = (facingIndex + 1) % facings.length;
    }

    distance++;
  }

  return output;
};