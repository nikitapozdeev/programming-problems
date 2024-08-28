/**
 * https://leetcode.com/problems/count-sub-islands
 */

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const rows = grid2.length;
  const cols = grid2[0].length;
  let count = 0;

  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return true;
    }

    if (grid2[row][col] === 0) {
      return true;
    }

    if (grid1[row][col] === 0) {
      return false;
    }

    grid2[row][col] = 0;

    let found = true;
    found = dfs(row + 1, col) && found;
    found = dfs(row - 1, col) && found;
    found = dfs(row, col + 1) && found;
    found = dfs(row, col - 1) && found;

    return found;
  }

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid2[row][col] === 1) {
        count += Number(dfs(row, col));
      }
    }
  }

  return count;
};