/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacificSeen = new Set();
  const atlanticSeen = new Set();
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const dfs = (row, col, seen, prevHeight) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return;
    }

    if (seen.has(`${row}-${col}`)) {
      return;
    }

    if (heights[row][col] < prevHeight) {
      return;
    }

    seen.add(`${row}-${col}`);
    for (const [dr, dc] of directions) {
      dfs(row + dr, col + dc, seen, heights[row][col]);
    }
  }

  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacificSeen, heights[0, col]);
    dfs(rows - 1, col, atlanticSeen, heights[rows - 1][col]);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacificSeen, heights[row][0]);
    dfs(row, cols - 1, atlanticSeen, heights[row][cols - 1]);
  }

  const answer = [];
  for (const pair of pacificSeen) {
    if (atlanticSeen.has(pair)) {
      answer.push(pair.split('-').map(Number));
    }
  }

  return answer;
};