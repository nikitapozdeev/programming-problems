/**
 * https://leetcode.com/problems/cache-with-time-limit
 */

var TimeLimitedCache = function() {
  this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const timestamp = Date.now();
  const cacheEntry = this.cache.get(key);
  this.cache.set(key, { value, expired: timestamp + duration });
  return cacheEntry?.expired >= timestamp;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const timestamp = Date.now();
  const cacheEntry = this.cache.get(key);
  return cacheEntry?.expired >= timestamp 
    ? cacheEntry.value
    : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const timestamp = Date.now();
  let count = 0;
  this.cache.forEach(({ expired }) => {
    count += Number(expired >= timestamp);
  });
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */