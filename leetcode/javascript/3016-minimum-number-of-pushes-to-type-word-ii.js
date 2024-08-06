/**
 * https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii
 */

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const offset = 'a'.charCodeAt(0);
  const count = new Array(26).fill(0);
  let pushes = 0;

  for (let i = 0; i < word.length; ++i) {
    count[word.charCodeAt(i) - offset]++;
  }

  count.sort((a, b) => b - a);
  
  for (let i = 0; i < 26; ++i) {
    if (!count[i]) break;
    pushes += count[i] * (Math.floor(i / 8) + 1)
  }

  return pushes;
};