/**
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  for (let i = 0; i < spells.length; i++) {
    let low = 0;
    let high = potions.length - 1;
    let count = 0;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = potions[mid] * spells[i];
      if (guess >= success) {
        count = potions.length - mid;
        high = mid - 1;
      } else if (guess < success) {
        low = mid + 1;
      }
    }
    spells[i] = count;
  }
  return spells;
};