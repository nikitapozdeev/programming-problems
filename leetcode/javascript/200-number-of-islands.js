/**
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let islandsCount = 0;
  const visit = new Set();
  
  const bfs = (row, col) => {
    visit.add(`${row}:${col}`);
    const queue = [];
    queue.push([row, col]);
    
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length !== 0) {
      // shift is probably O(n), so it's not cool, but js has no queue in stdlib
      const [row, col] = queue.shift();
      for (const [x, y] of dirs) {
        const r = row + y;
        const c = col + x;

        // check grid bounds
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
          continue;
        }
        
        if (grid[r][c] === '1' && !visit.has(`${r}:${c}`)) {
          queue.push([r, c]);
          visit.add(`${r}:${c}`);
        }
      }
    }  
  }
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1' && !visit.has(`${row}:${col}`)) {
        bfs(row, col);
        islandsCount++;
      }
    }
  }
  return islandsCount;
};
