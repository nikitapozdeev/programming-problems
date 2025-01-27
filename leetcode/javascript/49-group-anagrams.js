/**
 * https://leetcode.com/problems/group-anagrams
 */

/**
 * Time: O(N * K), where N - strs.length, K - word.length;
 * Memory: O(26)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {};

  for (const str of strs) {
    const hash = getHash(str);
    if (!anagrams[hash]) {
      anagrams[hash] = [];
    }
    anagrams[hash].push(str);
  }

  return Object.values(anagrams);
}

const getHash = (str) => {
  const frequency = new Array(26).fill(0);
  for (const char of str) {
    frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let hash = '';
  for (let i = 0; i < frequency.length; ++i) {
    hash += `${String.fromCharCode('a'.charCodeAt(0) + i)}${frequency[i]}`;
  }

  return hash;
}