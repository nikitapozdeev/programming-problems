/**
 * https://leetcode.com/problems/check-if-object-instance-of-class
 */

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }

  const prototype = Object.getPrototypeOf(obj)
  if (prototype === classFunction.prototype) {
    return true;
  }

  return checkIfInstanceOf(prototype, classFunction);
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */