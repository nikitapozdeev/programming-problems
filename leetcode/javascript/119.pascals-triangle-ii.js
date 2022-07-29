/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  const result = Array(rowIndex + 1).fill(1);
  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      result[j] += result[j - 1];
    }
  }
  return result;
};