/**
 * https://leetcode.com/problems/koko-eating-bananas/
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let max = -Infinity;
  for (const pile of piles) {
    max = Math.max(max, pile);
  }
  let low = Math.ceil(max / h);
  let high = max;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};