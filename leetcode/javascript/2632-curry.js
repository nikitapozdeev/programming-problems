/**
 * https://leetcode.com/problems/curry
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return (...moreArgs) => curried(...args, ...moreArgs);
  }
  return curried;
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */