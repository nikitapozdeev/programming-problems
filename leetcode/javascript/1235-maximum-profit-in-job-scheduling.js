/**
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const jobs = startTime.map((st, index) => ({
      start: st,
      end: endTime[index],
      value: profit[index],
  }));
  jobs.sort((a, b) => a.start - b.start);
  const cache = {};

  const dfs = (i) => {
    if (i >= jobs.length) {
      return 0;
    }

    if (i in cache) {
      return cache[i];
    }

    let value = dfs(i + 1);

    let low = i + 1;
    let high = jobs.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (jobs[mid].start < jobs[i].end) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    cache[i] = Math.max(value, jobs[i].value + dfs(low));
    return cache[i];
  }

  return dfs(0);
};