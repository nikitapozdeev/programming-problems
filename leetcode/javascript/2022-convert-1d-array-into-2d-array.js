/**
 * https://leetcode.com/problems/convert-1d-array-into-2d-array
 */

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (m * n !== original.length) {
    return [];
  }

  const arr = new Array(m).fill().map(() => new Array(n));

  for (let i = 0; i < original.length; ++i) {
    const row = Math.floor(i / n);
    const col = i % n;
    arr[row][col] = original[i];
  }

  return arr;
};