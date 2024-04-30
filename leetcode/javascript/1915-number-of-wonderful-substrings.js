/**
 * https://leetcode.com/problems/number-of-wonderful-substrings
 */

/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
  const offset = 'a'.charCodeAt(0);
  const frequencies = { 0: 1 };
  let count = 0;
  let mask = 0;

  for (const char of word) {
    const bit = char.charCodeAt(0) - offset;
    mask ^= (1 << bit);
    count += frequencies[mask] || 0;
    frequencies[mask] = (frequencies[mask] || 0) + 1;

    for (let i = 0; i < 10; i++) {
      const key = mask ^ (1 << i);
      count += (frequencies[key] || 0);
    }
  }


  return count;
};