/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  
  let gdc = len1 > len2 ? str2 : str1;
  let gdcLen = gdc.length;
  while (gdcLen !== 0) {
    if (len1 % gdcLen === 0 && len2 % gdcLen === 0) {
      if (str1 === gdc.repeat(len1 / gdcLen) && str2 === gdc.repeat(len2 / gdcLen)) {
        return gdc;
      }
    }
    gdc = gdc.slice(0, gdcLen - 1);
    gdcLen--;
  }

  return "";
};