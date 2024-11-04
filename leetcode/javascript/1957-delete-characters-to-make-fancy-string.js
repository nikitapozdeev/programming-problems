/**
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  const str = [];
  for (const char of s) {
    if (str.length >= 2 && char === str[str.length - 1] && char === str[str.length - 2]) {
      continue;
    }

    str.push(char);
  }

  return str.join('');
};