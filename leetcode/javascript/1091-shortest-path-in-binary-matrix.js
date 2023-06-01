/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const size = grid.length;
  const queue = [[0, 0, 1]];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  while (queue.length) {
    const [x, y, steps] = queue.shift();
    if (x < 0 || x >= size || y < 0 || y >= size || grid[x][y] === 1) {
      continue;
    }

    if (x === y && x === (size - 1)) {
      return steps;
    }

    // just mark visited cells in input array
    grid[x][y] = 1;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < size && ny >= 0 && ny < size && grid[nx][ny] === 0) {
        queue.push([nx, ny, steps + 1]);
      }
    }
  }
  
  return -1;
};