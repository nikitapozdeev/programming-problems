/**
 * https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk
 */

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  let sum = 0;
  for (const c of chalk) {
    sum += c;
    if (sum > k) break;
  }

  k %= sum;
  for (let i = 0; i < chalk.length; ++i) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }

  return 0;
};