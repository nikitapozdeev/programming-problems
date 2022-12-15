/**
 * https://leetcode.com/problems/insert-interval
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const answer = [];
  for (let i = 0; i < intervals.length; i++) {
    const [from, to] = intervals[i];

    if (newInterval[1] < from) {
      answer.push(newInterval)
      return [...answer, ...intervals.slice(i)];
    } else if (newInterval[0] > to) {
      answer.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(from, newInterval[0]),
        Math.max(to, newInterval[1])
      ]
    }
  }  
  answer.push(newInterval);
  return answer;
};