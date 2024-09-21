/**
 * https://leetcode.com/problems/lexicographical-numbers
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const output = new Array(n);
  let num = 1;

  for (let i = 0; i < n; ++i) {
    output[i] = num;

    if (num * 10 <= n) {
      num *= 10;
    } else {
      while (num % 10 === 9 || num >= n) {
        num = Math.floor(num / 10);
      }
      num++;
    }
  }

  return output;
};