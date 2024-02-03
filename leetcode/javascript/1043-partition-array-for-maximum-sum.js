/**
 * https://leetcode.com/problems/partition-array-for-maximum-sum
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  const cache = {};

  const dfs = (left) => {
    if (left in cache) {
      return cache[left];
    }

    let sum = 0;
    let max = 0;

    for (let right = left; right < Math.min(arr.length, left + k); right++) {
      max = Math.max(max, arr[right]);
      let count = right - left + 1;
      sum = Math.max(sum, dfs(right + 1) + (max * count));
    }   

    cache[left] = sum;
    return sum;
  }

  return dfs(0);
};