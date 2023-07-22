/**
 * https://leetcode.com/problems/knight-probability-in-chessboard
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  const directions = [
    [1, 2],   
    [1, -2],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1]
  ];

  const dp = new Array(k + 1).fill()
    .map(() => new Array(n).fill()
      .map(() => new Array(n).fill(0)));

    
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        dp[0][row][col] = 1;
      }
    }
      
  for (let move = 1; move <= k; move++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (const [drow, dcol] of directions) {
          const nextRow = row + drow;
          const nextCol = col + dcol;

          if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n) {
            continue;
          }

          dp[move][row][col] += (dp[move - 1][nextRow][nextCol] / 8);
        }
      }
    }
  }

  return dp[k][row][column];
};

console.log(knightProbability(3, 2, 0, 0)); // 0.06250
console.log(knightProbability(1, 0, 0, 0)); // 1.00000