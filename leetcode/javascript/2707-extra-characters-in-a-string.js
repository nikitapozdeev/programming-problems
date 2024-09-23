/**
 * https://leetcode.com/problems/extra-characters-in-a-string
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
  const trie = {};
  for (const word of dictionary) {
    let node = trie;
    for(const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true;
  }

  const cache = {};

  const dfs = (i) => {
    if (i >= s.length) {
      return 0;
    }

    if (i in cache) {
      return cache[i];
    }

    let count = dfs(i + 1) + 1;
    let node = trie;

    for (let j = i; j < s.length; ++j) {
      if (!node[s[j]]) {
        break;
      }

      node = node[s[j]];
      if (node.isEnd) {
        count = Math.min(count, dfs(j + 1));
      }
    }

    cache[i] = count;
    return cache[i];
  }

  return dfs(0);
};