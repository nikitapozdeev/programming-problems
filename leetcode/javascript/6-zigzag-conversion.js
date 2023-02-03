/**
 * https://leetcode.com/problems/zigzag-conversion
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const len = s.length;
  const gap = 2 * (numRows - 1);
  let answer = '';

  for (let row = 0; row < numRows; row++) {
    for (let i = row; i < len; i += gap) {
      answer += s[i];
      if (row > 0 && row < numRows - 1) {
        const additional = i + gap - 2 * row;
        if (additional < len) {
          answer += s[additional];
        }
      }
    }
  }

  return answer;
};