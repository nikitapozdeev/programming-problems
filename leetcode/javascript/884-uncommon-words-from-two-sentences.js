/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const counter = {};
  for (const word of s1.split(' ')) {
    counter[word] = (counter[word] || 0) + 1;
  }

  for (const word of s2.split(' ')) {
    counter[word] = (counter[word] || 0) + 1;
  }

  const uncommon = [];
  for (const [word, count] of Object.entries(counter)) {
    if (count === 1) {
      uncommon.push(word);
    }
  }

  return uncommon;
};