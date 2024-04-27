/**
 * https://leetcode.com/problems/freedom-trail/
 */

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  const cache = {};
  const index = {};

  for (let i = 0; i < ring.length; i++) {
    if (!index[ring[i]]) {
      index[ring[i]] = [];
    }

    index[ring[i]].push(i);
  }

  const dfs = (r, k) => {
    if (k === key.length) {
      return 0;
    }

    const cacheKey = `r:${r}k:${k}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    let result = +Infinity;

    for (const i of index[key[k]]) {
      const min = Math.min(Math.abs(r - i), ring.length - Math.abs(r - i));
      result = Math.min(result, 1 + min + dfs(i, k + 1));
    }

    cache[cacheKey] = result;
    return result;
  }

  return dfs(0, 0);
};