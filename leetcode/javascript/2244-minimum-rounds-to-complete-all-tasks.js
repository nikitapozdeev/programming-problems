/**
 * https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks
 */

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const counts = {};
  for (const task of tasks) {
    counts[task] = (counts[task] || 0) + 1;
  }

  let rounds = 0;
  for (const count of Object.values(counts)) {
    if (count === 1) {
      return -1;
    }

    rounds += count % 3 === 0 
      ? count / 3
      : Math.floor(count / 3) + 1;
  }
  return rounds;
};