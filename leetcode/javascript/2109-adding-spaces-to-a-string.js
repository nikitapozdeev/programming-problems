/**
 * https://leetcode.com/problems/adding-spaces-to-a-string
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  const words = new Array(spaces.length);
  let wIndex = 0;
  let from = 0;

  for (const to of spaces) {
    words[wIndex++] = s.substring(from, to);
    from = to;
  }

  words[wIndex] = s.substring(from);

  return words.join(' ');
};