/**
 * https://leetcode.com/problems/ugly-number-ii
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const minHeap = new PriorityQueue({ compare: (a, b) => a - b});
  const seen = {};

  let ugly = 1;
  minHeap.enqueue(ugly);
  seen[ugly] = true;

  for (let i = 0; i < n; ++i) {
    ugly = minHeap.dequeue();
    for (const factor of [2, 3, 5]) {
      const nextUgly = ugly * factor;
      
      if (seen[nextUgly]) {
        continue;
      }

      minHeap.enqueue(nextUgly);
      seen[nextUgly] = true;
    }
  }

  return ugly;
};