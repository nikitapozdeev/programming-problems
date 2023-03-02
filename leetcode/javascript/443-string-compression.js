/**
 * https://leetcode.com/problems/string-compression
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let [prev] = chars;
  let count = 1;
  let insertIndex = 1; 
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === prev) {
      count++;
    } else  {
      chars[insertIndex - 1] = prev;
      if (count > 1) {
        for (const char of String(count)) {
          chars[insertIndex] = char;
          insertIndex++;
        }
      } 
      insertIndex++;
      count = 1;
    }
    prev = chars[i];
  }

  return insertIndex - 1;
};