/**
 * https://leetcode.com/problems/replace-words
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const words = sentence.split(' ');
  const set = new Set(dictionary);

  for (let i = 0; i < words.length; i++) {
    let root = '';
    for (let j = 0; j < words[i].length; j++) {
      root = words[i].substring(0, j + 1);
      if (set.has(root)) break;
    }
    words[i] = root;
  };

  return words.join(' ');
};