/**
 * https://leetcode.com/problems/as-far-from-land-as-possible
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const gridSize = grid[0].length;
  if (gridSize === 1) {
    return -1;
  }

  const queue = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === 1) {
        queue.push([r, c]);
      }
    }
  }

  if (queue.length === 0 || queue.length === gridSize ** 2) {
    return -1;
  }

  let distance = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length > 0) {
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of directions) {
        if (x + dx < 0 || x + dx >= gridSize || 
            y + dy < 0 || y + dy >= gridSize || 
            grid[x + dx][y + dy] > 0) {
          continue;
        }

        distance = grid[x][y] + Math.abs(x - (x + dx)) + Math.abs(y - (y + dy));
        grid[x + dx][y + dy] = distance;
        queue.push([x + dx, y + dy]);
      }
    }
  }

  return distance - 1;
};