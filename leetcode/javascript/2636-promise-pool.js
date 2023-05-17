/**
 * https://leetcode.com/problems/promise-pool
 */

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  const start = async () => {
    if (functions.length === 0) {
      return;
    }

    const fn = functions.shift();
    await fn();
    await start();
  }

  const queue = new Array(n).fill().map(start)

  await Promise.all(queue);
}; 

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */