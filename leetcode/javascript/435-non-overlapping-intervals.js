/**
 * https://leetcode.com/problems/non-overlapping-intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let answer = 0;
  let k = -Infinity;

  for (const [start, end] of intervals) {
    if (start >= k) {
      k = end;
    } else {
      answer++;
    }
  }

  return answer;
};