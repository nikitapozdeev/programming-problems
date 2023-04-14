/**
 * https://leetcode.com/problems/longest-palindromic-subsequence
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const len = s.length;
  const cache = [...new Array(len)].map(() => new Array(len));

  const dfs = (left, right) => {
    if (cache[left][right]) {
      return cache[left][right];
    }

    if (left > right) {
      return 0;
    }

    if (left === right) {
      return 1;
    }

    if (s[left] === s[right]) {
      cache[left][right] = dfs(left + 1, right - 1) + 2;
    } else {
      cache[left][right] = Math.max(dfs(left + 1, right), dfs(left, right - 1));
    }

    return cache[left][right];
  }

  return dfs(0, len - 1);
};