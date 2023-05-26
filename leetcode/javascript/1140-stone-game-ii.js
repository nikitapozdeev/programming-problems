/**
 * https://leetcode.com/problems/stone-game-ii
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const cache = [...new Array(2)]
    .map(() => [...new Array(piles.length)]
      .map(() => new Array(piles.length)));

  const turn = (isAlice, i, m) => {
    if (i >= piles.length) {
      return 0;
    }

    if (cache[isAlice][i][m]) {
      return cache[isAlice][i][m];
    }

    let max = isAlice ? 0 : +Infinity;
    let sum = 0;

    for (let x = 1; x <= (2 * m) && (i + x - 1) < piles.length; x++) {
      sum += piles[i + x - 1];
      if (isAlice) {
        max = Math.max(max, sum + turn(Number(!isAlice), i + x, Math.max(m, x)))
      } else {
        max = Math.min(max, turn(Number(!isAlice), i + x, Math.max(m, x)))
      }
    }

    cache[isAlice][i][m] = max;
    return cache[isAlice][i][m];
  }
  
  return turn(1, 0, 1);
};