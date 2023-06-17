/**
 * https://leetcode.com/problems/make-array-strictly-increasing
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  const cache = {};
  arr2.sort((a, b) => a - b);

  const dfs = (i, prev) => {
    if (i === arr1.length) {
      return 0;
    }

    const cacheKey = `${i}:${prev}`;
    if (cache[cacheKey] !== undefined) {
      return cache[cacheKey];
    }

    let cost = +Infinity;
    if (arr1[i] > prev) {
      cost = dfs(i + 1, arr1[i]);
    }

    let low = 0;
    let high = arr2.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      const suggest = arr2[mid];
      if (suggest <= prev) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    if (low < arr2.length) {
      cost = Math.min(cost, 1 + dfs(i + 1, arr2[low]));
    }

    cache[cacheKey] = cost;
    return cache[cacheKey];
  }

  const answer = dfs(0, -1);
  return answer === +Infinity ? -1 : answer;
};