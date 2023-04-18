/**
 * https://leetcode.com/problems/merge-strings-alternately
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let word1Ptr = 0;
  let word2Ptr = 0;

  let answer = '';
  while (word1Ptr < word1.length && word2Ptr < word2.length) {
    answer += word1[word1Ptr++];
    answer += word2[word2Ptr++];
  }

  answer += word1.substring(word1Ptr);
  answer += word2.substring(word2Ptr);
  
  return answer;
};