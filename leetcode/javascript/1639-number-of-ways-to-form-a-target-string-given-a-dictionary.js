/**
 * https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const charOffset = 'a'.charCodeAt(0);
  const wordLength = words[0].length;
  const charCounts = [...new Array(wordLength)].map(() => new Array(26).fill(0));
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      charCounts[i][word.charCodeAt(i) - charOffset] += 1;
    }
  }

  const cache = [...new Array(target.length)].map(() => new Array(wordLength));

  const dfs = (targetPtr, wordPtr) => {
    if (targetPtr === target.length) {
      return 1;
    }

    if (wordPtr === wordLength) {
      return 0;
    }

    if (cache[targetPtr][wordPtr] !== undefined) {
      return cache[targetPtr][wordPtr];
    }

    const count = charCounts[wordPtr][target.charCodeAt(targetPtr) - charOffset];
    cache[targetPtr][wordPtr] = dfs(targetPtr, wordPtr + 1);
    cache[targetPtr][wordPtr] += count * dfs(targetPtr + 1, wordPtr + 1);

    return cache[targetPtr][wordPtr] % (7 + 1e9);
  }

  return dfs(0, 0);
};