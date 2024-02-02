/**
 * https://leetcode.com/problems/sequential-digits
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const output = [];
  const queue = Array.from({ length: 9 }, (_, v) => v + 1);

  while (queue.length) {
    const num = queue.shift();
    if (num > high) {
      continue;
    }

    if (num >= low) {
      output.push(num);
    }

    const lastDigit = num % 10;
    if (lastDigit < 9) {
      const next = (num * 10) + lastDigit + 1;
      queue.push(next);
    }
  }

  return output;
};