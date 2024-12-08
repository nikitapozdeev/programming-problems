/**
 * https://leetcode.com/problems/two-best-non-overlapping-events
 */

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  events.sort((a, b) => a[0] - b[0]);
  const minHeap = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });

  let maxScore = 0;
  let maxSum = 0;

  for (const [start, end, score] of events) {
    while (minHeap.size() && minHeap.front()[0] < start) {
      const event = minHeap.dequeue();
      maxScore = Math.max(maxScore, event[1]);
    }

    maxSum = Math.max(maxSum, maxScore + score);
    minHeap.enqueue([end, score]);
  }

  return maxSum;
};