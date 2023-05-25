/**
 * https://leetcode.com/problems/new-21-game
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
  if (k === 0) {
    return 1;
  }

  let sum = 0;
  for (let i = k; i < k + maxPts; i++) {
    sum += Number(i <= n);
  }

  cache = {};
  for (let i = k - 1; i >= 0; i--) {
    cache[i] = sum / maxPts;
    sum += cache[i] - (i + maxPts <= n ? (cache[i + maxPts] || 1) : 0)
  }

  return cache[0];
};