/**
 * https://leetcode.com/problems/custom-sort-string
 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const frequencies = {};
  for (const char of s) {
    frequencies[char] = (frequencies[char] ?? 0) + 1;
  }

  let outputPtr = 0;
  const output = new Array(s.length);

  for (const char of order) {
    while ((frequencies[char] ?? 0) > 0) {
      output[outputPtr++] = char;
      frequencies[char]--;
    }
  }

  for (let [char, frequency] of Object.entries(frequencies)) {
    while (frequency > 0) {
      output[outputPtr++] = char;
      frequency--;
    }
  }

  return output.join('');
};