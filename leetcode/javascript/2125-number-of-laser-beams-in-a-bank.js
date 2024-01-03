/**
 * https://leetcode.com/problems/number-of-laser-beams-in-a-bank
 */

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let prev = 0;
  let total = 0;

  for (const row of bank) {
    let count = 0;
    for (const char of row) {
      if (char === '1') {
        count++;
      }
    }

    if (count === 0) {
      continue;
    }

    total += prev * count;
    prev = count;
  }

  return total;
};