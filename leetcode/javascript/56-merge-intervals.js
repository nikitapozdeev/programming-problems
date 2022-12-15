/**
 * https://leetcode.com/problems/merge-intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const answer = [intervals[0]];

  for (const [from, to] of intervals.slice(1)) {
    const lastIndex = answer.length - 1;
    const lastTo = answer[lastIndex][1];
    if (from <= lastTo) {
      answer[lastIndex][1] = Math.max(to, lastTo);
    } else {
      answer.push([from, to]);
    }
  }

  return answer;
};