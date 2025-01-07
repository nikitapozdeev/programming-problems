/**
 * https://leetcode.com/problems/string-matching-in-an-array
 */

/**
 * Just dumb brute force
 * TODO: add solution with KMP
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const output = [];
  
  for (const wordA of words) {
    for (const wordB of words) {
      if (wordA === wordB) continue;
      if (!wordB.includes(wordA)) continue;
      output.push(wordA);
      break;
    }
  } 

  return output;
};