/**
 * https://leetcode.com/problems/minimum-cost-for-tickets
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const cache = {};

  const dfs = (index) => {
    if (index >= days.length) {
      return 0;
    }

    if (index in cache) {
      return cache[index];
    }

    cache[index] = +Infinity;
    for (const [dirationIndex, duration] of Object.entries([1, 7, 30])) {
      const cost = costs[dirationIndex];
      const maxDay = days[index] + duration;

      let nextDay = index;
      while (nextDay < days.length && days[nextDay] < maxDay) {
        nextDay++;
      }

      cache[index] = Math.min(cache[index], dfs(nextDay) + cost);
    }

    return cache[index]
  }

  return dfs(0);
};