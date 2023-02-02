/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  if (words.length === 1) {
    return true;
  }

  const orderWeights = { undefined: -1 };
  for (let i = 0; i < order.length; i++) {
    orderWeights[order[i]] = i;
  }

  const compare = (wordA, wordB) => {
    const len = Math.max(wordA.length, wordB.length);
    for (let i = 0; i < len; i++) {
      const charA = orderWeights[wordA[i]];
      const charB = orderWeights[wordB[i]];
      
      if (charA === charB) {
        continue;
      }

      return charA < charB;
    }

    return true;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!compare(words[i], words[i + 1])) {
      return false;
    }
  }

  return true;
};