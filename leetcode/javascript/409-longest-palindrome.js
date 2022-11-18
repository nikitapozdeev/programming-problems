/**
 * https://leetcode.com/problems/longest-palindrome/
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }
  
  let result = 0;
  Object.values(map).forEach(cnt => {
    result += Math.floor(cnt / 2) * 2;
    if (result % 2 === 0 && cnt % 2 === 1) {
      result++;
    }
  });
  
  return result;
};