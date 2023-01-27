/**
 * https://leetcode.com/problems/concatenated-words
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const map = new Map();
  for (const word of words) {
    map.set(word, true);
  }
  
  const cache = new Map();
  const dfs = (word) => {
    if (cache.has(word)) {
      return cache.get(word);
    }

    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);

      if ((map.has(prefix) && map.has(suffix)) || 
          (map.has(prefix) && dfs(suffix))) {
        cache.set(word, true);
        return true;
      }
    }

    cache.set(word, false);
    return false;
  }

  const concatenatedWords = [];
  for (const word of words) {
    if (dfs(word)) {
      concatenatedWords.push(word);
    }
  }

  return concatenatedWords;
};