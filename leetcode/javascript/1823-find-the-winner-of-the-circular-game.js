/**
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  let winner = 0;

  for (let i = 1; i <= n; ++i) {
    winner = (winner + k) % i;
  }

  return winner + 1;
};