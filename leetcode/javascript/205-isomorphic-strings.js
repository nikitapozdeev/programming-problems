/**
 * https://leetcode.com/problems/isomorphic-strings/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const mapST = {};
  const mapTS = {};
  
  for (let i = 0; i < s.length; i++) {
    if ((s[i] in mapST && mapST[s[i]] !== t[i]) || (t[i] in mapTS && mapTS[t[i]] !== s[i])) {
      return false;
    }

    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
};