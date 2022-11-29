/**
 * https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  return n === 1;
};

const getNext = (n) => {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    sum += (digit ** 2);
  }
  return sum;
}