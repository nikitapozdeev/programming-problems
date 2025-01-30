/**
 * https://leetcode.com/problems/merge-intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const output = [intervals[0]];

  for (const [start, end] of intervals.slice(1)) {
    const lastIndex = output.length - 1;
    const lastEnd = output[lastIndex][1];
    if (start <= lastEnd) {
      output[lastIndex][1] = Math.max(lastEnd, end);
    } else {
      output.push([start, end]);
    }
  }

  return output;
};