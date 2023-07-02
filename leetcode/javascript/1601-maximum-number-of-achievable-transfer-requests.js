/**
 * https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests
 */

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  const buildings = new Array(n).fill(0);
  let maxRequests = -Infinity;

  const dfs = (i, count) => {
    if (i === requests.length) {
      for (const building of buildings) {
        if (building !== 0) {
          return;
        }
      }

      maxRequests = Math.max(maxRequests, count);
      return;
    }

    const [from, to] = requests[i];

    buildings[from]--;
    buildings[to]++;

    dfs(i + 1, count + 1);

    buildings[from]++;
    buildings[to]--;

    dfs(i + 1, count);
  }

  dfs(0, 0);

  return maxRequests;
};