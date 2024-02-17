/**
 * https://leetcode.com/problems/furthest-building-you-can-reach
 */

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
  const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });

  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if (diff <= 0) {
      continue;
    }

    bricks -= diff;
    maxHeap.enqueue(diff);

    if (bricks < 0) {
      if (ladders === 0) {
        return i;
      }

      ladders--;
      bricks += maxHeap.dequeue();
    }
  }

  return heights.length - 1;
};