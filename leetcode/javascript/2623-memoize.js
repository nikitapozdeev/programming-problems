/**
 * https://leetcode.com/problems/memoize
 */

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const cacheKey = JSON.stringify(args);
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    cache[cacheKey] = fn.apply(this, args);
    return cache[cacheKey];
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */