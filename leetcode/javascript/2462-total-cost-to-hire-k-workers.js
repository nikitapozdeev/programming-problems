/**
 * https://leetcode.com/problems/total-cost-to-hire-k-workers
 */

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
  const leftHeap = new PriorityQueue({ compare: (a, b) => a - b});
  const rightHeap = new PriorityQueue({ compare: (a, b) => a - b});
  let leftPtr = 0;
  let rightPtr = 0;

  for (leftPtr = 0; leftPtr < costs.length && leftPtr < candidates; leftPtr++) {
    leftHeap.enqueue(costs[leftPtr]);
  }
  leftPtr--;

  for (rightPtr = costs.length - 1; rightPtr >= 0 && rightPtr > costs.length - 1 - candidates && rightPtr > leftPtr; rightPtr--) {
    rightHeap.enqueue(costs[rightPtr]);
  }
  rightPtr++;

  let totalCost = 0;
  for (let session = 0; session < k; session++) {
    if (rightHeap.size() === 0 || (leftHeap.size() > 0 && leftHeap.front() <= rightHeap.front())) {
      totalCost += leftHeap.dequeue();
      if (leftPtr < rightPtr - 1) {   
        leftPtr++;
        leftHeap.enqueue(costs[leftPtr]);
      }
    } else {
      totalCost += rightHeap.dequeue();
      if (rightPtr > leftPtr + 1) {
        rightPtr--;
        rightHeap.enqueue(costs[rightPtr]);
      }
    }
  }

  return totalCost;
};