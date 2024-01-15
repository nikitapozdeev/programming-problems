/**
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses
 */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const losses = {};
  for (const [winner, loser] of matches) {
    losses[loser] = (losses[loser] || 0) + 1;
    losses[winner] = (losses[winner] || 0) + 0;
  }

  const zeroLose = [];
  const oneLose = [];
  for (const [player, count] of Object.entries(losses)) {
    if (count === 0) {
      zeroLose.push(player);
    }

    if (count === 1) {
      oneLose.push(player);
    }
  }

  return [zeroLose.sort((a, b) => a - b), oneLose.sort((a, b) => a - b)];
};