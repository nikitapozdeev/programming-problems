/**
 * https://leetcode.com/problems/add-to-array-form-of-integer
 */

/**
 * Shitty solution :)
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  const kstr = String(k);
  const result = new Array(Math.max(num.length, kstr.length));
  let curry = 0;

  for (let i = 0; i < result.length; i++) {
    const a = num[num.length - 1 - i] || 0;
    const b = Number(kstr[kstr.length - 1 - i] || 0);
    const c = a + b + curry;
    curry = Math.floor(c / 10);
    result[result.length - 1 - i] = c % 10;
  }

  return curry > 0 ? [curry, ...result] : result;
};