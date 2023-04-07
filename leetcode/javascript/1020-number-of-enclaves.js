/**
 * https://leetcode.com/problems/number-of-enclaves
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const seen = [...new Array(rows)].map(() => new Array(cols));
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];

  const dfs = (row, col) => {
    seen[row][col] = true;
    boundaryLands++;
    for (const [x, y] of directions) {
      let nRow = row + y;
      let nCol = col + x;
      if (nRow > 0 && nRow < rows && nCol > 0 && nCol < cols && !seen[nRow][nCol] && grid[nRow][nCol] === 1) {
        dfs(nRow, nCol);
      }
    }
  }

  let lands = 0;
  let boundaryLands = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      lands += grid[row][col];

      if ((row === 0 || row === (rows - 1) || col === 0 || col === (cols - 1))) {
        if (!seen[row][col] && grid[row][col] === 1) {
          dfs(row, col);
        }
      }
    }
  }

  return lands - boundaryLands;
};