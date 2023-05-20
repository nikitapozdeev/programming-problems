/**
 * https://leetcode.com/problems/throttle
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let isThrottled = false;
  let savedThis = null;
  let savedArgs = null;

  return function inner(...args) {
    if (isThrottled) {
      savedThis = this;
      savedArgs = args;
      return;
    }

    isThrottled = true;
    fn.apply(this, args);

    setTimeout(() => {
      isThrottled = false;
      if (savedThis && savedArgs) {
        inner.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null
      }
    }, t);
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */