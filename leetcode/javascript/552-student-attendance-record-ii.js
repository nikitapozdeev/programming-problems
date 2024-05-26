/**
 * https://leetcode.com/problems/student-attendance-record-ii
 */

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const mod = 1e9 + 7;
  const cache = new Array(n + 1).fill()
    .map(() => new Array(2).fill()
      .map(() => new Array(3)));
  
  const dfs = (i, a, l) => {
    if (a >= 2 || l >= 3) {
      return 0;
    }

    if (i === 0) {
      return 1;
    }

    if (cache[i][a][l] !== undefined) {
      return cache[i][a][l];
    }

    let count = dfs(i - 1, a, 0);
    count = (count + dfs(i - 1, a + 1, 0)) % mod;
    count = (count + dfs(i - 1, a, l + 1)) % mod;

    cache[i][a][l] = count;
    return count;
  }

  return dfs(n, 0, 0);
};