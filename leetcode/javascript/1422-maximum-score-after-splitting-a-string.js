/**
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let ones = 0;
  
  for (const char of s) {
    ones += Number(char === '1');
  }

  let zeros = 0;
  let maxSum = 0;

  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] === '1') {
      ones--;
    } else {
      zeros++;
    }
    maxSum = Math.max(maxSum, ones + zeros);
  }

  return maxSum;
};