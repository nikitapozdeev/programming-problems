/**
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const vovels = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  const map = new Array(32).fill(-1);
  let xor = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; ++i) {
    xor ^= (vovels[s[i]] || 0);
    if (xor && map[xor] === -1) {
      map[xor] = i;
    }
    maxLength = Math.max(maxLength, i - map[xor]);
  }

  return maxLength;
};