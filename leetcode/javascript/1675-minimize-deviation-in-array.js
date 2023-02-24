/**
 * https://leetcode.com/problems/minimize-deviation-in-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  let minNumber = +Infinity;
  const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });

  for (let num of nums) {
    if (num % 2 === 1) {
      num *= 2;
    }

    maxHeap.enqueue(num);
    minNumber = Math.min(minNumber, num);
  }

  let minDeviation = +Infinity;
  while (true) {
    let maxNumber = maxHeap.dequeue();
    minDeviation = Math.min(minDeviation, maxNumber - minNumber);
    
    if (maxNumber % 2 === 1) {
      break;
    }

    maxNumber /= 2;
    minNumber = Math.min(minNumber, maxNumber);
    maxHeap.enqueue(maxNumber);
  }

  return minDeviation;
};