/**
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  const pairs = [];
  const heap = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
  const visited = { [`0:0`]: true };
  heap.enqueue([0, 0, nums1[0] + nums2[0]]);

  while (heap.size() > 0 && k - 1 >= 0) {
    const [i, j] = heap.dequeue();
    pairs.push([nums1[i], nums2[j]]);

    if (i + 1 < len1 && !visited[`${i + 1}:${j}`]) {
      heap.enqueue([i + 1, j, nums1[i + 1] + nums2[j]]);
      visited[`${i + 1}:${j}`] = true;
    }

    if (j + 1 < len2 && !visited[`${i}:${j + 1}`]) {
      heap.enqueue([i, j + 1, nums1[i] + nums2[j + 1]]);
      visited[`${i}:${j + 1}`] = true;
    }
    
    k--;
  }
  
  return pairs;
};