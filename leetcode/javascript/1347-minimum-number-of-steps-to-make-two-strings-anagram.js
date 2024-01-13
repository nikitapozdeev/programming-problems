/**
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const sChars = {};
  const tChars = {};

  for (let i = 0; i < s.length; i++) {
    sChars[s[i]] = (sChars[s[i]] || 0) + 1;
    tChars[t[i]] = (tChars[t[i]] || 0) + 1;
  }

  let steps = 0;
  for (const char of Object.keys(sChars)) {
    const sCount = sChars[char];
    const tCount = tChars[char] || 0;
    if (tCount < sCount) {
      steps += sCount - tCount;
    }
  }

  return steps;
};