/**
 * https://leetcode.com/problems/lemonade-change
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (!fives) return false;
      tens++;
      fives--;
    } else if (bill === 20) {
      if (tens > 0 && fives > 0) {
        tens--;
        fives--;
      } else if (fives > 2) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};