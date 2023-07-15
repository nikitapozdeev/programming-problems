/**
 * https://leetcode.com/problems/group-anagrams
 */

/**
 * Time: O(N + N(K + 26))
 * Memory: O(26N)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {};
  for (const str of strs) {
    const key = countingSort(str);

    if (!anagrams[key]) {
      anagrams[key] = [];
    }

    anagrams[key].push(str);
  }

  return Object.values(anagrams);
};

/**
 * Time: O(n + 26)
 * Memory: O(26)
 * @param {string} str 
 * @returns 
 */
function countingSort(str) {
  const count = new Array(26).fill(0);
  for (const char of str) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = '';
  for (let i = 0; i < 26; i++) {
    result += String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(count[i]);
  }

  return result;
}