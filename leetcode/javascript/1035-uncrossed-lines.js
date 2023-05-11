/**
 * https://leetcode.com/problems/uncrossed-lines
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  const cache = [...new Array(nums1.length)].map(() => new Array(nums2.length))
  const connect = (i, j) => {
    if (i < 0 || j < 0) {
      return 0;
    }

    if (cache[i][j] !== undefined) {
      return cache[i][j];
    }

    if (nums1[i] === nums2[j]) {
      cache[i][j] = 1 + connect(i - 1, j - 1);
    } else {
      cache[i][j] = Math.max(connect(i, j - 1), connect(i - 1, j));
    }

    return cache[i][j]
  }

  return connect(nums1.length - 1, nums2.length - 1);
};