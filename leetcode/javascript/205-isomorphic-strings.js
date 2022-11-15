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
    if (!mapST[s[i]] && !mapTS[t[i]]) {
      mapST[s[i]] = t[i];
      mapTS[t[i]] = s[i];
    } else if (mapST[s[i]] !== t[i] || mapTS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};