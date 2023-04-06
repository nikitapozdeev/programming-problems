/**
 * https://leetcode.com/problems/number-of-closed-islands
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const seen = [...new Array(rows)].map(() => new Array(cols));
  let islands = 0;

  const bfs = (row, col) => {
    const queue = [[row, col]];
    seen[row][col] = true;
    let isClosed = true;

    const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    while (queue.length) {
      const [row, col] = queue.shift();
      for (const [xDirection, yDirection] of directions) {
        let neiRow = row + yDirection;
        let neiCol = col + xDirection;
        if (neiRow < 0 || neiRow >= rows || neiCol < 0 || neiCol >= cols) {
          isClosed = false;
        } else if (grid[neiRow][neiCol] === 0 && !seen[neiRow][neiCol]) {
          queue.push([neiRow, neiCol]);
          seen[neiRow][neiCol] = true;
        }
      }
    }

    return isClosed;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0 && !seen[row][col] && bfs(row, col)) {
        islands++;
      }
    }
  }
  
  return islands;
};