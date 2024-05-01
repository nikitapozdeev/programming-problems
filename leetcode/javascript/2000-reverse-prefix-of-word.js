/**
 * https://leetcode.com/problems/reverse-prefix-of-word
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let charIndex = null;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      charIndex = i;
      break;
    }
  }

  if (charIndex === null) {
    return word;
  }

  const output = word.split('');
  for (let i = 0; i <= Math.floor(charIndex / 2); i++) {
    const tmp = output[i];
    output[i] = output[charIndex - i];
    output[charIndex - i] = tmp;
  }

  return output.join('');
};