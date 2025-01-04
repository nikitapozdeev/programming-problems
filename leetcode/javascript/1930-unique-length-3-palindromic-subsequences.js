/**
 * https://leetcode.com/problems/unique-length-3-palindromic-subsequences
 */

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  const chars = new Set([...s]);
  let count = 0;

  for (const char of chars.values()) {
    let first;
    let last;

    for (let i = 0; i < s.length; ++i) {
      if (s[i] === char) {
        if (first === undefined) {
          first = i;
        }
        last = i;
      }
    }

    const between = new Set();
    for (let i = first + 1; i < last; ++i) {
      between.add(s[i]);
    }

    count += between.size;
  }

  return count;
};