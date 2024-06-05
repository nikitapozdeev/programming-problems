/**
 * https://leetcode.com/problems/find-common-characters
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const getFrequency = (word) => {
    const frequency = {};
    for (const char of word) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }

  const output = [];
  const commonFrequency = getFrequency(words[0]);

  for (let i = 1; i < words.length; i++) {
    const wordFrequency =  getFrequency(words[i]);
    for (const char of Object.keys(commonFrequency)) {
      commonFrequency[char] = Math.min(commonFrequency[char], wordFrequency[char] || 0);
    }
  }

  for (const [char, count] of Object.entries(commonFrequency)) {
    for (let i = 0; i < count; i++) {
      output.push(char);
    }
  }

  return output;
};