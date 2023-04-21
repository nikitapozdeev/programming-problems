/**
 * https://leetcode.com/problems/profitable-schemes
 */

/**
 * Too hard, just an editorial solution adapted to js.
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const cache = [...new Array(101)].map(() => [...new Array(101)].map(() => new Array(101).fill(0)));

  for (let count = 0; count <= n; count++) {
    cache[group.length][count][minProfit] = 1;
  } 

  for (let i = group.length - 1; i >= 0; i--) {
    for (let count = 0; count <= n; count++) {
      for (let p = 0; p <= minProfit; p++) {
        cache[i][count][p] = cache[i + 1][count][p];
        if (count + group[i] <= n) {
          const profitIndex = Math.min(minProfit, p + profit[i]);
          cache[i][count][p] = (cache[i][count][p] + cache[i + 1][count + group[i]][profitIndex]) % (1e9 + 7); 
        }
      }
    }
  }

  return cache[0][0][0];
};