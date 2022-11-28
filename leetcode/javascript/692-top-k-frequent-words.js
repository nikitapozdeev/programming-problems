/**
 * https://leetcode.com/problems/top-k-frequent-words/
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const frequencies = {};
  for (const word of words) {
    frequencies[word] = (frequencies[word] || 0) + 1;
  }
  
  const bucket = new Array(words);
  for (const [word, frequency] of Object.entries(frequencies)) {
    if (!bucket[frequency]) {
      bucket[frequency] = [];
    }
    bucket[frequency].push(word);
  }
 
  const result = [];
  for (let i = words.length - 1; i > 0 && result.length < k; i--) {
    if (bucket[i]) {
      result.push(...bucket[i].sort().slice(0, k - result.length));
    }
  }
  
  return result;
};