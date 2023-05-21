/**
 * https://leetcode.com/problems/json-deep-equal
 */

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  const stringifier = (key, value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return Object.fromEntries(Object.entries(value).sort());
    }

    return value;
  }
  return JSON.stringify(o1, stringifier) === JSON.stringify(o2, stringifier);
};