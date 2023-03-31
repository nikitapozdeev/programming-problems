/**
 * https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza
 */

/**
 * Too hard, just editorial solution translated to js
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  const rows = pizza.length;
  const cols = pizza[0].length;
  const apples = new Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));
  const cache = new Array(k).fill(0)
    .map(() => new Array(rows).fill(0)
      .map(() => new Array(cols).fill(0)));

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      apples[row][col] = Number(pizza[row][col] === 'A') + apples[row + 1][col] + apples[row][col + 1] - apples[row + 1][col + 1];
      cache[0][row][col] = Number(apples[row][col] > 0);
    }
  }

  for (let remain = 1; remain < k; remain++) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        for (let nextRow = row + 1; nextRow < rows; nextRow++) {
          if (apples[row][col] - apples[nextRow][col] > 0) {
            cache[remain][row][col] += cache[remain - 1][nextRow][col];
            cache[remain][row][col] %= 1000000007;
          }
        }
        for (let nextCol = col + 1; nextCol < cols; nextCol++) {
          if (apples[row][col] - apples[row][nextCol] > 0) {
            cache[remain][row][col] += cache[remain - 1][row][nextCol];
            cache[remain][row][col] %= 1000000007;
          }
        }
      }
    }
  }

  return cache[k - 1][0][0];
};