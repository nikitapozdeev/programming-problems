/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const search = (rowFrom, colFrom, rowTo, colTo) => {
    if (rowFrom > rowTo || colFrom > colTo) {
      return false;
    }
    
    const midCol = Math.floor((colTo + colFrom) / 2);
    const midRow = Math.floor((rowTo + rowFrom) / 2);

    if (matrix[midRow][midCol] === target) {
      return true;
    }
    
    if (matrix[midRow][midCol] > target) {
      return search(rowFrom, colFrom, rowTo, midCol - 1) ||
        search(rowFrom, midCol, midRow - 1, colTo);
    } else {
      return search(rowFrom, midCol + 1, rowTo, colTo) ||
        search(midRow + 1, colFrom, rowTo, midCol);
    }
  };
  
  return search(0, 0, matrix.length - 1, matrix[0].length - 1);
};