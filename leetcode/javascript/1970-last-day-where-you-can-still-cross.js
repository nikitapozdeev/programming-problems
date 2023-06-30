/**
 * https://leetcode.com/problems/last-day-where-you-can-still-cross
 */

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
  const grid = new Array(row).fill().map(() => new Array(col).fill(0));
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const clearGrid = () => {
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        grid[r][c] = 0;
      }
    }
  }

  const floodGrid = (day) => {
    for (let i = 0; i < day; i++) {
      const [r, c] = cells[i];
      grid[r - 1][c - 1] = 1;
    }
  }

  const hasPath = () => {
    const queue = [];
    for (let i = 0; i < col; i++) {
      if (grid[0][i] === 0) {
        queue.push([0, i]);
        grid[0][i] = -1;
      }
    }

    while (queue.length > 0) {
      const [r, c] = queue.shift();
      if (r === row - 1) {
        return true;
      }

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        
        if (nr < 0 || nr >= row || nc < 0 || nc >= col) {
          continue;
        }

        if (grid[nr][nc] === 0) {
          queue.push([nr, nc]);
          grid[nr][nc] = -1;
        }
      }
    }

    return false;
  }

  let low = 0;
  let high = cells.length - 1;
  let lastDay = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    clearGrid();
    floodGrid(mid);

    if (hasPath()) {
      low = mid + 1;
      lastDay = mid;
    } else {
      high = mid - 1;
    }
  }

  return lastDay;
};