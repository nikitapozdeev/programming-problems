/**
 * https://leetcode.com/problems/maximum-odd-binary-number/
 */

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let countOfOnes = -1;
  for (const char of s) {
    if (char === '1') {
      countOfOnes++;
    }
  }

  const output = new Array(s.length).fill(0);
  output[s.length - 1] = 1;

  for (let i = 0; i < countOfOnes; i++) {
    output[i] = 1
  };

  return output.join('');
};