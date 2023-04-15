/**
 * https://leetcode.com/problems/maximum-value-of-k-coins-from-piles
 */

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const pilesLen = piles.length;
  const cache = [...new Array(pilesLen)].map(() => new Array(k + 1).fill(-1));
  const dfs = (pile, coins) => {
    if (pile === pilesLen) {
      return 0;
    }

    if (cache[pile][coins] !== -1) {
      return cache[pile][coins];
    }

    cache[pile][coins] = dfs(pile + 1, coins);
    let curr = 0;

    for (let i = 0; i < Math.min(coins, piles[pile].length); i++) {
      curr += piles[pile][i];
      cache[pile][coins] =  Math.max(cache[pile][coins], curr + dfs(pile + 1, coins - i - 1));
    }

    return cache[pile][coins];
  }

  return dfs(0, k);
};