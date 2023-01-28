/**
 * https://leetcode.com/problems/data-stream-as-disjoint-intervals
 */

var SummaryRanges = function() {
  this.stream = new Set();
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
  this.stream.add(value);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const sortedStream = [...this.stream].sort((a, b) => a - b);
  const intervals = [];

  let i = 0;
  while (i < sortedStream.length) {
    const start = sortedStream[i];
    while ((i + 1) < sortedStream.length && (sortedStream[i] + 1) === sortedStream[i + 1]) {
      i++;
    }
    intervals.push([start, sortedStream[i]]);
    i++;
  }

  return intervals;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */