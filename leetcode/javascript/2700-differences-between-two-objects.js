/**
 * https://leetcode.com/problems/differences-between-two-objects
 */

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  let diff = {};
  for (const key of Object.keys(obj1)) {
    if (key in obj2) {
      if (obj1[key] && typeof obj1[key] === 'object' && Array.isArray(obj1[key]) === Array.isArray(obj2[key])) {
        const childDiff = objDiff(obj1[key], obj2[key]);
        if (Object.keys(childDiff).length > 0) {
          diff[key] = childDiff;
        }
      } else if (obj1[key] !== obj2[key]) {
        diff[key] = [obj1[key], obj2[key]];
      }
    }
  }
  return diff;
};