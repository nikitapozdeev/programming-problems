/**
 * https://leetcode.com/problems/top-k-frequent-words/
 */

/**
 * With bucket-sort
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

/**
 * With max heap
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const frequencies = {};
  for (const word of words) {
    frequencies[word] = (frequencies[word] || 0) + 1;
  }

  const maxHeap = new PriorityQueue({ compare: (a, b) => b[0] - a[0] || b[1] < a[1] });
  for (const [word, freq] of Object.entries(frequencies)) {
    maxHeap.enqueue([freq, word]);
  }

  const output = [];
  while (k--) {
    const [_, word] = maxHeap.dequeue();
    output.push(word);
  }

  return output;
};