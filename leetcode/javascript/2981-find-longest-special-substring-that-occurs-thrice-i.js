/**
 * https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
  const counter = {};

  for (let i = 0; i < s.length; ++i) {
    const substr = [];
    for (let j = i; j < s.length; ++j) {
      if (substr.length > 0 && substr[substr.length - 1] !== s[j]) {
        break;
      }
      
      substr.push(s[j]);
      const key = substr.join('');
      counter[key] = (counter[key] || 0) + 1;
    }
  }

  let max = 0;
  for (const [str, count] of Object.entries(counter)) {
    if (count >= 3) {
      max = Math.max(max, str.length);
    }
  }

  return max || -1;
};