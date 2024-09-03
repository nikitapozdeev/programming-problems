/**
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  const offset = 'a'.charCodeAt(0);
  let number = s.split('').map(char => char.charCodeAt(0) - offset + 1).join('');

  while (k > 0 && number.length > 1) {
    let sum = 0;
    for (let i = 0; i < number.length; ++i) {
      sum += Number(number[i]);
    }

    number = sum.toString();
    k--;
  }

  return Number(number);
};