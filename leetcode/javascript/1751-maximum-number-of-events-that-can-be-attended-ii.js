/**
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii
 */

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
  events.sort((a, b) => a[0] - b[0]);

  const findNextEventIndex = (currentIndex) => {
    let low = currentIndex + 1;
    let high = events.length;

    while (low < high) {
      const mid = (low + high) >> 1;
      if (events[mid][0] <= events[currentIndex][1]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  const nextEventIndexes = new Array(events.length);
  for (let i = 0; i < events.length; i++) {
    nextEventIndexes[i] = findNextEventIndex(i);
  }

  const cache = new Array(k + 1).fill().map(() => new Array(events.length));

  const dfs = (eventIndex, remainingCount) => {
    if (remainingCount === 0 || eventIndex >= events.length) {
      return 0;
    }

    if (cache[remainingCount][eventIndex] !== undefined) {
      return cache[remainingCount][eventIndex];
    }

    const nextEventIndex = nextEventIndexes[eventIndex];

    cache[remainingCount][eventIndex] = Math.max(
        dfs(eventIndex + 1, remainingCount),
        events[eventIndex][2] + dfs(nextEventIndex, remainingCount - 1)
    );

    return cache[remainingCount][eventIndex];
  }

  return dfs(0, k);
};