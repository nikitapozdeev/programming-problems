/**
 * https://leetcode.com/problems/construct-string-with-repeat-limit
 */

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  const frequency = {};
  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const maxHeap = new PriorityQueue({ compare: (a, b) => (b[0] - a[0]) || (b[1] - a[1]) });
  for (const [char, count] of Object.entries(frequency)) {
    maxHeap.enqueue([char.charCodeAt(0), count]);
  }

  const output = [];

  while (maxHeap.size()) {
    const [charCode, count] = maxHeap.dequeue();
    const repeats = Math.min(count, repeatLimit);
    output.push(String.fromCharCode(charCode).repeat(repeats));

    if (count > repeats && maxHeap.size()) {
      const [nextCharCode, nextCount] = maxHeap.dequeue();
      output.push(String.fromCharCode(nextCharCode));

      if (nextCount > 1) {
        maxHeap.enqueue([nextCharCode, nextCount - 1]);
      }

      maxHeap.enqueue([charCode, count - repeats]);
    }
  }

  return output.join('');
};