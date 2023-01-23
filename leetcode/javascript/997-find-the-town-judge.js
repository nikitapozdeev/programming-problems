/**
 * https://leetcode.com/problems/find-the-town-judge
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  const map = new Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    map[a]--;
    map[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (map[i] === n - 1) {
      return i;
    }
  }

  return -1;
};