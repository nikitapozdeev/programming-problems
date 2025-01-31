/**
 * https://leetcode.com/problems/partition-labels
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const last = {};
  for (let i = 0; i < s.length; ++i) {
    last[s[i]] = i;
  }

  const partitions = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    end = Math.max(end, last[char]);

    if (i === end) {
      partitions.push(end - start + 1);
      start = i + 1;
    }
  }

  return partitions;
};