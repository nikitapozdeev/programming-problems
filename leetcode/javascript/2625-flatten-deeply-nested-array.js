/**
 * https://leetcode.com/problems/flatten-deeply-nested-array
 */

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flat(curr, n - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};