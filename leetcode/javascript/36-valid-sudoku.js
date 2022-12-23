/**
 * https://leetcode.com/problems/valid-sudoku
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowMap = [...Array(9)].map(() => new Map());
  const colMap = [...Array(9)].map(() => new Map());
  const boxMap = [...Array(3)].map(() => [...Array(3)].map(() => new Map()));
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value === '.') {
        continue;  
      }
      
      if (rowMap[row].has(value)) {
        return false;
      }
      
      if (colMap[col].has(value)) {
        return false;
      }
      
      const br = Math.floor(row / 3);
      const bc = Math.floor(col / 3)
      if (boxMap[br][bc].has(value)) {
        return false;
      }
      
      rowMap[row].set(value, 1);
      colMap[col].set(value, 1);
      boxMap[br][bc].set(value, 1);
    }
  }

  return true;
};