/**
 * https://leetcode.com/problems/unique-number-of-occurrences
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const count = {};
  for (const i of arr) {
    count[i] = (count[i] || 0) + 1;
  }

  const unique = {};
  for (const i of Object.values(count)) {
    if (i in unique) {
      return false;
    }

    unique[i] = true;
  }

  return true;
};