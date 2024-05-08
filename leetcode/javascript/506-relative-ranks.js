/**
 * https://leetcode.com/problems/relative-ranks
 */

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const heap = new PriorityQueue({ compare: (a, b) => b[1] - a[1] });
  for (let i = 0; i < score.length; i++) {
    heap.enqueue([i, score[i]]);
  }

  const output = new Array(score.length);
  while (heap.size()) {
    const place = score.length - heap.size() + 1;
    const [index] = heap.dequeue();
    if (place === 1) {
      output[index] = "Gold Medal";
    } else if (place === 2) {
      output[index] = "Silver Medal";
    } else if (place === 3) {
      output[index] = "Bronze Medal";
    } else {
      output[index] = String(place)
    }
  }
  
  return output;
};