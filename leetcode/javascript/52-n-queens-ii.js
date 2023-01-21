/**
 * https://leetcode.com/problems/n-queens-ii
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0;
  const cols = {};
  const posDiag = {};
  const negDiag = {};
  
  const isNotUnderAttack = (row, col) => {
    return !cols[col] && !posDiag[row + col] && !negDiag[row - col];
  }
  
  const placeQueen = (row, col) => {
    cols[col] = 1;
    posDiag[row + col] = 1;
    negDiag[row - col] = 1;
  }
  
  const removeQueen = (row, col) => {
    cols[col] = 0;
    posDiag[row + col] = 0;
    negDiag[row - col] = 0;
  }
  
  const backtrack = (row) => {
    if (row === n) {
      count++;
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isNotUnderAttack(row, col)) {
        placeQueen(row, col);
        backtrack(row + 1);
        removeQueen(row, col);
      }
    }
  }
  
  backtrack(0);
  return count;
};