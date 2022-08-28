/**
 * https://leetcode.com/problems/ransom-note/
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  
  const map = {};
  for (let char of magazine) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  for (let char of ransomNote) {
    if (map[char] > 0) {
      map[char]--;
    } else {
      return false;
    }
  }
  return true;
};