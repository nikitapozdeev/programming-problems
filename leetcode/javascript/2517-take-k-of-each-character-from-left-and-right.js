/**
 * https://leetcode.com/problems/take-k-of-each-character-from-left-and-right
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  const counter = { a: 0, b: 0, c: 0 };
  for (const char of s) {
    counter[char]++;
  }

  if (counter['a'] < k || counter['b'] < k || counter['c'] < k) {
    return -1;
  }

  const window = { a: 0, b: 0, c: 0 };
  let max = 0;
  let left = 0;
  
  for (let right = 0; right < s.length; ++right) {
    window[s[right]]++;

    while (left <= right && 
      ((counter['a'] - window['a']) < k) ||
      ((counter['b'] - window['b']) < k) ||
      ((counter['c'] - window['c']) < k)
    ) {
      window[s[left]]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return s.length - max;
};