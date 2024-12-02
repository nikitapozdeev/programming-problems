/**
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
 */

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  let wordIndex = 1;
  let skip = false;
  let searchIndex = 0;

  for (const char of sentence) {
    if (char === ' ') {
      searchIndex = 0;
      wordIndex++;
      skip = false;
      continue;
    }

    if (skip) continue;

    if (char !== searchWord[searchIndex]) {
      skip = true;
      searchIndex = 0;
      continue;
    }

    if (char === searchWord[searchIndex]) {
      searchIndex++;
    }

    if (searchWord.length === searchIndex) {
      return wordIndex;
    }
  }

  return -1;
};