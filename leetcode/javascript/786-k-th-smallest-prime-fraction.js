/**
 * https://leetcode.com/problems/k-th-smallest-prime-fraction
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  const minHeap = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
  for (let i = 0; i < arr.length; i++) {
    minHeap.enqueue([arr[i] / arr[arr.length - 1], i, arr.length - 1]);
  }

  for (let i = 0; i < k - 1; i++) {
    let [_, numeratorIdx, denominatorIdx] = minHeap.dequeue();
    denominatorIdx--;

    if (denominatorIdx > numeratorIdx) {
      minHeap.enqueue([arr[numeratorIdx] / arr[denominatorIdx], numeratorIdx, denominatorIdx]);
    }
  }

  const [_, numeratorIdx, denominatorIdx] = minHeap.dequeue();
  return [arr[numeratorIdx], arr[denominatorIdx]];
};