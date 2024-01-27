/**
 * https://leetcode.com/problems/k-inverse-pairs-array
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const mod = 1e9 + 7;
  let prev = new Array(k + 1).fill(0);
  prev[0] = 1;

  for (let i = 1; i <= n; i++) {
    const curr = new Array(k + 1).fill(0);
    let total = 0;

    for (let j = 0; j <= k; j++) {
      if (j >= i) {
        total -= prev[j - i];
      }
      total = (total + prev[j] + mod) % mod;
      curr[j] = total;
    }
    prev = curr;
  }

  return prev[k];
};