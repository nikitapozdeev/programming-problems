/**
 * https://leetcode.com/problems/maximal-score-after-applying-k-operations
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });
  for (const num of nums) {
    maxHeap.enqueue(num);
  }

  let score = 0;
  while (k--) {
    const num = maxHeap.dequeue();
    score += num;
    maxHeap.enqueue(Math.ceil(num / 3));
  }
  
  return score;
};