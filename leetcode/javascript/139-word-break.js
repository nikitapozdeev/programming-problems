/**
 * https://leetcode.com/problems/word-break
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const cache = {};

  const dfs = (position) => {
    if (position < 0) {
      return true;
    }

    if (position in cache) {
      return cache[position];
    }

    for (const word of wordDict) {
      if (s.substring(position - word.length + 1, position + 1) === word) {
        cache[position] = dfs(position - word.length);
        if (cache[position]) {
          return true;
        }
      }
    }

    cache[position] = false;
    return false;
  }

  return dfs(s.length - 1);
};