/**
 * https://leetcode.com/problems/assign-cookies
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let cookiePtr = 0;
  let count = 0;
  for (const greed of g) {
    while (true) {
      if (cookiePtr >= s.length) {
        return count;
      }

      if (s[cookiePtr++] >= greed) {
        count++;
        break;
      }
    }
  }

  return count;
};