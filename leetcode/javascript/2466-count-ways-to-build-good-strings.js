/**
 * https://leetcode.com/problems/count-ways-to-build-good-strings
 */

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const cache = new Array(high + 1);
  cache[0] = 1;

  const dfs = (i) => {
    if (cache[i] !== undefined) {
      return cache[i];
    }

    let count = 0;
    if (i >= zero) {
      count += dfs(i - zero);
    }

    if (i >= one) {
      count += dfs(i - one);
    }
    
    cache[i] = count % (1e9 + 7);
    return cache[i];
  }

  let count = 0;
  for (let i = low; i <= high; i++) {
    count += dfs(i);
    count %= (1e9 + 7);
  }

  return count;
};