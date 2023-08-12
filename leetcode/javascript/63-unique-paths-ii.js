/**
 * https://leetcode.com/problems/unique-paths-ii
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  const dp = new Array(rows)
    .fill()
    .map(() => new Array(cols).fill(0));

  dp[rows - 1][cols - 1] = 1;
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0;
        continue;
      }
      
      if (col + 1 < cols) {
        dp[row][col] += dp[row][col + 1];
      }

      if (row + 1 < rows) {
        dp[row][col] += dp[row + 1][col];
      }
    }
  }

  return dp[0][0];
};