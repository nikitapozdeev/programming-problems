/**
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);

  let low = 0;
  let high = Math.abs(nums[0] - nums[nums.length - 1]);

  const countPairs = (distance) => {
    let count = 0;
    let left = 0;

    for (let right = 0; right < nums.length; ++right) {
      while (nums[right] - nums[left] > distance) {
        left++;
      }
      count += right - left;
    }

    return count;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const count = countPairs(mid);
    
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

/**
 * TLE dumb solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  const minHeap = new PriorityQueue({ compare: (a, b) => a - b });

  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      minHeap.enqueue(Math.abs(nums[i] - nums[j]));
    }
  }

  let distance = null;
  while (k > 0) {
    distance = minHeap.dequeue();
    k--;
  }

  return distance;
}