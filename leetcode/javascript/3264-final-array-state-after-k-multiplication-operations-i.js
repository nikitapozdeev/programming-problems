/**
 * https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  const minHeap = new PriorityQueue({ compare: (a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return  Number(a[1] > b[1]);
  }});
  for (let i = 0; i < nums.length; ++i) {
    minHeap.enqueue([nums[i], i]);
  }

  while(minHeap.size() && k--) {
    const [num, index] = minHeap.dequeue();
    nums[index] = num * multiplier;
    minHeap.enqueue([nums[index], index]);
  }

  return nums;
};