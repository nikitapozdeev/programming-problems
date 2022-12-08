/**
 * https://leetcode.com/problems/rotting-oranges
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const queue = [];
  let minutes = 0;
  let fresh = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 ) {
        fresh++;
      }

      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  while (queue.length > 0 && fresh > 0) {
    const count = queue.length;
    for (i = 0; i < count; i++) {
      const [row, col] = queue.shift();
      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;
        const isOutOfBounds = nr < 0 || nr >= rows || nc < 0 || nc >= cols;
        if (isOutOfBounds || grid[nr][nc] !== 1) {
            continue;
        }

        grid[nr][nc] = 2;
        queue.push([nr, nc]);
        fresh--;
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};