/**
 * https://leetcode.com/problems/string-compression
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 1;
  let insertIndex = 0; 
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else  {
      chars[insertIndex] = chars[i - 1];
      insertIndex++;
      if (count > 1) {
        for (const char of String(count)) {
          chars[insertIndex] = char;
          insertIndex++;
        }
      } 
      count = 1;
    }
  }

  return insertIndex;
};