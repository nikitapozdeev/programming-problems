/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let low = 0;
  let high = letters.length - 1;
  let [smallest] = letters;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const suggest = letters[mid]
    if (suggest > target) {
      high = mid - 1;
      smallest = suggest;
    } else {
      low = mid + 1;
    }
  }
  return smallest;
};