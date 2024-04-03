/**
 * https://leetcode.com/problems/word-search
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const rows = board.length;
  const cols = board[0].length;
  const seen = {};

  const dfs = (row, col, i) => {
    if (i === word.length) {
      return true;
    }

    const seenKey = `${row}-${col}`;
    if (seen[seenKey]) {
      return false;
    }
     
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }

    if (word[i] !== board[row][col]) {
      return false;
    }

    seen[seenKey] = true;
    for (const [sRow, sCol] of directions) {
      if (dfs(row + sRow, col + sCol, i + 1)) {
        return true;
      }
    }
    seen[seenKey] = false;
  } 

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};