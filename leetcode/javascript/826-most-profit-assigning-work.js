/**
 * https://leetcode.com/problems/most-profit-assigning-work
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const n = difficulty.length;
  const maxHeap = new PriorityQueue({ compare: (a, b) => b[0] - a[0] });
  for (let i = 0; i < n; ++i) {
    maxHeap.enqueue([profit[i], i]);
  }

  worker.sort((a, b) => b - a);

  let maxProfit = 0;
  for (const w of worker) {
    while (maxHeap.size()) {
      const [_, i] = maxHeap.front();
      const d = difficulty[i];
      const p = profit[i];
      if (d <= w) {
        maxProfit += p;
        break;
      } else {
        maxHeap.dequeue();
      }
    }
  }

  return maxProfit;
};