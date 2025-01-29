/**
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Array(rows).fill().map(() => new Array(cols));
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];

  const bfs = (row, col) => {
    const queue = [[row, col]];
    
    while (queue.length) {
      const [r, c] = queue.pop();
      visited[r][c] = 1;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && grid[nr][nc] === '1') {
          queue.push([nr, nc]);
        }
      }
    }
  }

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (visited[row][col] || grid[row][col] === '0') {
        continue;
      }

      bfs(row, col);
      islands++;
    }
  }

  return islands;
};