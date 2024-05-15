/**
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
  const size = grid.length;
  const queue = new Queue();
  const distances = {};
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const getCoordsKey = (row, col) => (row << 16) ^ col;
  const isInBounds = (row, col) => Math.min(row, col) >= 0 && Math.max(row, col) < size;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col]) {
        queue.enqueue([row, col, 0]);
        distances[getCoordsKey(row, col)] = 0;
      }
    }
  }

  while (queue.size()) {
    const [row, col, distance] = queue.dequeue();

    for (const [drow, dcol] of directions) {
      const r = row + drow;
      const c = col + dcol;
      if (!isInBounds(r, c)) continue;

      const key = getCoordsKey(r, c);
      if (key in distances) continue;

      distances[key] = distance + 1;
      queue.push([r, c, distance + 1]);
    }
  }

  const visited = {};
  const maxHeap = new PriorityQueue({ compare: (a, b) => b[2] - a[2] });
  maxHeap.enqueue([0, 0, distances[getCoordsKey(0, 0)]]);
  visited[getCoordsKey(0, 0)] = true;

  while (maxHeap.size()) {
    const [row, col, minDistance] = maxHeap.dequeue();
    if (row === size - 1 && col === size - 1) {
      return minDistance;
    }

    for (const [drow, dcol] of directions) {
      const r = row + drow;
      const c = col + dcol;

      if (!isInBounds(r, c)) continue;

      const key = getCoordsKey(r, c);
      if (key in visited) continue;

      visited[key] = true;
      maxHeap.enqueue([r, c, Math.min(minDistance, distances[key])]);
    }
  }
};