/**
 * https://leetcode.com/problems/hand-of-straights
 */

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const frequency = {};
  for (const card of hand) {
    frequency[card] = (frequency[card] || 0) + 1;
  }

  const minHeap = new PriorityQueue({ compare: (a, b) => a - b });
  for (const card of Object.keys(frequency)) {
    minHeap.enqueue(Number(card));
  }


  while (minHeap.size()) {
    const card = minHeap.front();
    for (let i = 0; i < groupSize; i++) {
      if (frequency[card + i] === 0) {
        return false;
      }

      frequency[card + i]--;
      if (!frequency[card + i]) {
        if (minHeap.dequeue() !== card + i) {
          return false;
        }
      }
    }
  }

  return true;
};