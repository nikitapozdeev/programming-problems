/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const seen = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};