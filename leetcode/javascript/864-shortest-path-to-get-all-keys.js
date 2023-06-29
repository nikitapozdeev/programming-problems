/**
 * https://leetcode.com/problems/shortest-path-to-get-all-keys
 */

/**
 * It's really hard, just translate official solution into JS.
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const keyCodeOffset = 'a'.charCodeAt(0);
  const lockCodeOffset = 'A'.charCodeAt(0);

  let allKeys = 0;
  const keys = {};
  const locks = {};
  let posRow = 0;
  let posCol = 0;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = grid[r][c];
      if (cell >= 'a' && cell <= 'f') {
        keys[cell] = true;
        allKeys += (1 << cell.charCodeAt(0) - keyCodeOffset);
      } else if (cell >= 'A' && cell <= 'F') {
        locks[cell] = true;
      } else if (cell === '@') {
        posRow = r;
        posCol = c;
      }
    }
  }

  const seen = {};
  const queue = [[posRow, posCol, 0, 0]];
  while (queue.length > 0) {
    const [row, col, keystate, distance] = queue.shift();
    for (const [drow, dcol] of directions) {
      const dr = row + drow;
      const dc = col + dcol;

      if (dr < 0 || dr >= rows || dc < 0 || dc >= cols || grid[dr][dc] === '#') {
        continue;
      }

      const cell = grid[dr][dc];
      const seenKey = `${dr}:${dc}`;
      if (keys[cell] && !(keystate & (1 << cell.charCodeAt(0) - keyCodeOffset))) {
        const dkeybits = (keystate | (1 << cell.charCodeAt(0) - keyCodeOffset));

        if (dkeybits === allKeys) {
          return distance + 1;
        }

        if (!seen[dkeybits]) {
          seen[dkeybits] = {};
        }
        seen[dkeybits] = { [seenKey]: true };
        queue.push([dr, dc, dkeybits, distance + 1]);
      } else if (locks[cell] && !(keystate & (1 << cell.charCodeAt(0) - lockCodeOffset))) {
        continue;
      } else if (!(seen[keystate] || {})[seenKey]) {
        if (!seen[keystate]) {
          seen[keystate] = {};
        }
        seen[keystate][seenKey] = true;
        queue.push([dr, dc, keystate, distance + 1]);
      }
    }
  }

  return -1;
};