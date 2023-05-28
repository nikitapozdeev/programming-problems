/**
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick
 */

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  const cache = {};

  const dfs = (from, to) => {
    const len = to - from;
    if (len === 1) {
      return 0;
    }

    const cacheKey = `${from}-${to}`;
    if (cache[cacheKey] !== undefined) {
      return cache[cacheKey];
    }

    let min = +Infinity;
    for (const cut of cuts) {
      if (cut > from && cut < to) {
        min = Math.min(min, len + dfs(from, cut) + dfs(cut, to));
      }
    }

    if (min === +Infinity) {
      min = 0;
    }

    cache[cacheKey] = min;
    return cache[cacheKey];
  }

  return dfs(0, n);
};