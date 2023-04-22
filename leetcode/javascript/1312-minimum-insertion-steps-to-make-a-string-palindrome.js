/**
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome
 */

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const cache = [...new Array(s.length)].map(() => new Array(s.length));

  const dfs = (left, right) => {
    if (left >= right) {
      return 0;
    }

    if (cache[left][right] !== undefined) {
      return cache[left][right];
    }

    if (s[left] === s[right]) {
      return dfs(left + 1, right - 1);
    }

    cache[left][right] = 1 + Math.min(dfs(left + 1, right), dfs(left, right - 1));
    return cache[left][right];
  }

  return dfs(0, s.length - 1);
};