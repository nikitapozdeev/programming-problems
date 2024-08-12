/**
 * https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (row, col, visited) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return;
    }

    if (grid[row][col] !== 1 || visited[row][col]) {
      return;
    }

    visited[row][col] = true;

    dfs(row + 1, col, visited);
    dfs(row - 1, col, visited);
    dfs(row, col + 1, visited);
    dfs(row, col - 1, visited);
  }

  const getIslandsCount = () => {
    let islands = 0;
    const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));

    for (let row = 0; row < rows; ++row) {
      for (let col = 0; col < cols; ++col) {
        if (grid[row][col] === 1 && !visited[row][col]) {
          dfs(row, col, visited);
          islands++;
        
          if (islands > 1) {
            return islands;
          }
        }
      }
    }

    return islands
  }

  if (getIslandsCount() !== 1) {
    return 0;
  }

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] === 1) {
        grid[row][col] = 0;
        if (getIslandsCount() !== 1) {
          return 1;
        }

        grid[row][col] = 1;
      }
    }
  }

  return 2;
};