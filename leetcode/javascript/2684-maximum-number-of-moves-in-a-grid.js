/**
 * https://leetcode.com/problems/maximum-number-of-moves-in-a-grid
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = new Array(rows).fill().map(() => new Array(cols).fill(0));
  let max = 0;
  
  for (let col = 1; col < grid[0].length; ++col) {
    for (let row = 0; row < grid.length; ++row) {
      for (const dr of [-1, 0, 1]) {
        const prevRow = row + dr;
        if (prevRow < 0 || prevRow > rows - 1) {
          continue;
        }

        if (grid[row][col] <= grid[prevRow][col - 1]) {
          continue;
        }

        if (!dp[prevRow][col - 1] && col > 1) {
          continue;
        }

        dp[row][col] = Math.max(dp[row][col], dp[prevRow][col - 1] + 1);
      }

      max = Math.max(max, dp[row][col]);
    }
  }

  return max;
};