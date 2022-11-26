/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = {};
  let result = 0;
  
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    while ((right - left + 1) - Math.max(...Object.values(count)) > k) {
      count[s[left]]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  
  return result;
};