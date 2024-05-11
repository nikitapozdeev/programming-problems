/**
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers
 */

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const rates = new Array(quality.length);
  for (let i = 0; i < quality.length; i++) {
    rates[i] = [wage[i] / quality[i], quality[i]];
  }
  rates.sort((a, b) => a[0] - b[0]);

  let minMoney = +Infinity;
  let totalQuality = 0;
  const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });

  for (const [rate, quality] of rates) {
    maxHeap.enqueue(quality);
    totalQuality += quality;

    if (maxHeap.size() > k) {
      totalQuality -= maxHeap.dequeue();
    }

    if (maxHeap.size() === k) {
      minMoney = Math.min(minMoney, rate * totalQuality);
    }
  }

  return minMoney;
};