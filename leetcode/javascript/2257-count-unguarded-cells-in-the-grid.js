/**
 * https://leetcode.com/problems/count-unguarded-cells-in-the-grid
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  const grid = new Array(m).fill().map(() => new Array(n).fill(0));
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let unoccupied = m * n;

  for (const [wr, wc] of walls) {
    grid[wr][wc] = 2;
    unoccupied--;
  }

  for (const [gr, gc] of guards) {
    grid[gr][gc] = 2;
    unoccupied--;
  }

  for (const [gr, gc] of guards) {
    for (const [dr, dc] of directions) {
      let r = gr + dr;
      let c = gc + dc;
      
      while (true) {
        if (r < 0 || r >= m || c < 0 || c >= n) break;
        if (grid[r][c] === 2) break;

        if (!grid[r][c]) {
          grid[r][c] = 1;
          unoccupied--;
        }
        r += dr;
        c += dc;
      }
    }
  }

  return unoccupied;
};