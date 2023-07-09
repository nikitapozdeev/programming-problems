/**
 * https://leetcode.com/problems/substring-with-largest-variance
 */

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
  const counter = new Array(26);
  const charCodeOffset = 'a'.charCodeAt(0);
  for (const char of s) {
    counter[char.charCodeAt(0) - charCodeOffset] = (counter[char.charCodeAt(0) - charCodeOffset] || 0) + 1;
  }

  let max = 0;
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      if (i === j || counter[i] === 0 || counter[j] === 0) {
        continue;
      }

      const major = String.fromCharCode(charCodeOffset + i);
      const minor = String.fromCharCode(charCodeOffset + j);
      let majorCount = 0;
      let minorCount = 0;

      let remaining = counter[j];

      for (const char of s) {
        if (char === major) {
          majorCount++;
        }

        if (char === minor) {
          minorCount++;
          remaining--;
        }

        if (minorCount > 0) {
          max = Math.max(max, majorCount - minorCount);
        }

        if (majorCount < minorCount && remaining > 0) {
          majorCount = 0;
          minorCount = 0;
        }
      }
    }
  }

  return max;
};