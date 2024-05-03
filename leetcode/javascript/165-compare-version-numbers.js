/**
 * https://leetcode.com/problems/compare-version-numbers/
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const parts1 = version1.split('.');
  const parts2 = version2.split('.');

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const a = Number(parts1[i] ?? 0);
    const b = Number(parts2[i] ?? 0);
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  }

  return 0;
};