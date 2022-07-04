/**
 * https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let charIndex = 0;
  let char = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "") {
      return "";
    }
    
    if (i === 0) {
      char = strs[i][charIndex];
    }
    
    if (!char || char !== strs[i][charIndex]) {
      return strs[i].substring(0, charIndex);
    }
    
    // next round trip
    if (i === strs.length - 1) {
      i = -1;
      charIndex++;
    }
  }
};