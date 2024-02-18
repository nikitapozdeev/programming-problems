/**
 * https://leetcode.com/problems/meeting-rooms-iii
 */

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  const available = new PriorityQueue({ compare: (a, b) => a - b });
  for (let i = 0; i < n; i++) {
    available.enqueue(i);
  }

  const used = new PriorityQueue({ compare: (a, b) => a[0] === b[0] ? a[1] > b[1] : a[0] > b[0] });
  const counter = new Array(n).fill(0);

  for (let [start, end] of meetings) {
    while (!used.isEmpty() && used.front()[0] <= start) {
      const [_, room] = used.dequeue();
      available.enqueue(room);
    }

    if (available.isEmpty()) {
      const [rEnd, room] = used.dequeue();
      end = rEnd + end - start;
      available.enqueue(room);
    }

    const room = available.dequeue();
    used.enqueue([end, room]);

    counter[room]++;
  }

  let maxIndex = 0
  let max = counter[maxIndex];
  for (let i = 1; i < n; i++) {
    if (counter[i] > max) {
      max = counter[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};