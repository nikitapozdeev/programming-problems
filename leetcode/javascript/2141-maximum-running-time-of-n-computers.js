/**
 * https://leetcode.com/problems/maximum-running-time-of-n-computers
 */

/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  batteries.sort((a, b) => a - b);
  
  let sum = 0;
  for (const battery of batteries) {
    sum += battery;
  }

  for (let i = batteries.length - 1; i > 0; i--) {
    const remaining = Math.floor(sum / n);
    if (batteries[i] <= remaining) {
      return remaining;
    }

    sum -= batteries[i];
    n--;
  }

  return batteries[0];
};