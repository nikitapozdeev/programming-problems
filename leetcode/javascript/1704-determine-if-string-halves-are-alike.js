/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let counter = 0;
  const vovels = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (vovels.has(char)) {
      counter += ((i < s.length / 2) ? 1 : -1);
    }
  }
  return counter === 0;
};