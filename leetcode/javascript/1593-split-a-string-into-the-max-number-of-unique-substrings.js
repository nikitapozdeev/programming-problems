/**
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let maxCount = 0;

  const backtrack = (start, count, seen) => {
    if (count + (s.length - start) <= maxCount) {
      return;
    }

    if (start === s.length) {
      maxCount = Math.max(maxCount, count);
      return;
    }

    for (let end = start + 1; end <= s.length; ++end) {
      const substr = s.substring(start, end);
      if (!seen.has(substr)) {
        seen.add(substr);
        backtrack(end, count + 1, seen);
        seen.delete(substr);
      }
    }
  }

  backtrack(0, 0, new Set());
  return maxCount;
};