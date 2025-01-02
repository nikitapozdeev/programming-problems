/**
 * https://leetcode.com/problems/count-vowel-strings-in-ranges/
 */

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  const wordsSize = words.length;
  const prefix = new Array(wordsSize);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  const isVowelString = (str) => {
    const start = str[0];
    const end = str[str.length - 1];
    return vowels.has(start) && vowels.has(end);
  }

  for (let i = 0; i < wordsSize; ++i) {
    const isVowel = isVowelString(words[i]);
    prefix[i] = (prefix[i - 1] || 0) + Number(isVowel);
  }

  const queriesSize = queries.length;
  const output = new Array(queriesSize);

  for (let i = 0; i < queriesSize; ++i) {
    const [from, to] = queries[i];
    output[i] = prefix[to] - (from === 0 ? 0 : prefix[from - 1]);
  }

  return output;
};