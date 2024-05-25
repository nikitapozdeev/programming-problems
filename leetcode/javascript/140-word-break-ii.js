/**
 * https://leetcode.com/problems/word-break-ii/
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const words = new Set(wordDict);
  const sentences = [];

  const dfs = (i, sentence) => {
    if (i === s.length) {
      sentences.push(sentence.join(' '));
      return;
    };

    for (let j = i + 1; j <= s.length; j++) {
      const word = s.slice(i, j);
      if (words.has(word)) {
        sentence.push(word);
        dfs(j, sentence);
        sentence.pop();
      }
    }
  }

  dfs(0, []);
  return sentences;
};