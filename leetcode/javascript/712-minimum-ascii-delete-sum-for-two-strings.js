/**
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const cache = new Map();

  const dfs = (i, j) => {
    if (i < 0 && j < 0) {
      return 0;
    }

    const cacheKey = `${i}:${j}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (i < 0) {
      const sum = getRemainingSum(s2, j);
      cache.set(cacheKey, sum);
      return sum;
    }

    if (j < 0) {
      const sum = getRemainingSum(s1, i);
      cache.set(cacheKey, sum);
      return sum;
    }

    if (s1[i] === s2[j]) {
      const sum = dfs(i - 1, j - 1);
      cache.set(cacheKey, sum);
      return sum;
    }

    const sum = Math.min(
      s1.charCodeAt(i) + dfs(i - 1, j),
      s2.charCodeAt(j) + dfs(i, j - 1)
    );
    cache.set(cacheKey, sum);
    return sum;
  }

  return dfs(s1.length - 1, s2.length - 1);
};

function getRemainingSum(str, endIndex) {
  let sum = 0;
  for (let k = 0; k <= endIndex; k++) {
    sum += str.charCodeAt(k);
  }

  return sum;
}