/**
 * https://leetcode.com/problems/shortest-bridge
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const n = grid.length;
  const seen = {};
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const isOutOfBounds = (row, col) => {
    return row < 0 || row >= n || col < 0 || col >= n;
  }

  const dfs = (row, col) => {
    if (isOutOfBounds(row, col) || !grid[row][col]) {
      return;
    }

    const key = `${row}-${col}`;
    if (seen[key]) {
      return;
    }

    seen[key] = true;
    for (const [dx, dy] of directions) {
      dfs(row + dy, col + dx);
    }
  }

  const bfs = () => {
    const queue = [];
    for (const key of Object.keys(seen)) {
      const [row, col] = key.split('-');
      queue.push([Number(row), Number(col)]);
    }
    let flips = 0;

    while (queue.length) {
      const steps = queue.length;
      for (let i = 0; i < steps; i++) {
        const [row, col] = queue.shift();
        for (const [dx, dy] of directions) {
          const r = row + dy;
          const c = col + dx;
          const key = `${r}-${c}`;
          if (isOutOfBounds(r, c) || seen[key]) {
            continue;
          }

          if (grid[r][c]) {
            return flips;
          }

          seen[key] = true;
          queue.push([r, c]);
        }
      }
      flips++;
    }
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col]) {
        dfs(row, col);
        return bfs();
      }
    }
  }
};