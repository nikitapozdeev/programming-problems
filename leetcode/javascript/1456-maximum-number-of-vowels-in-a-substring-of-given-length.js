/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let l = 0;
  let count = 0;
  let totalMax = 0;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let r = 0; r < s.length && totalMax !== k; r++) {
    if (vowels.has(s[r])) {
      count++;
    }

    totalMax = Math.max(totalMax, count);
    if (r - l >= k - 1) {
      if (vowels.has(s[l])) {
        count--;
      }
      l++;
    }
  }

  return totalMax;
};