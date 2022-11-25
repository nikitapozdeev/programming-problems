/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const results = [];
  if (p.length > s.length) {
    return results;
  }
  
  const sMap = {};
  const pMap = {};
  for (let i = 0; i < p.length; i++) {
    pMap[p[i]] = (pMap[p[i]] || 0) + 1;
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  
  if (isMapEquals(pMap, sMap)) {
    results.push(0);
  }
  
  let left = 0;
  for (let right = p.length; right < s.length; right++) {
    sMap[s[right]] = (sMap[s[right]] || 0) + 1;
    sMap[s[left]]--;
    
    if (sMap[s[left]] === 0) {
      delete sMap[s[left]];
    }
    left++;
    
    if (isMapEquals(pMap, sMap)) {
      results.push(left);
    }
  }

  return results;
};

const isMapEquals = (mapA, mapB) => {
  return Object.keys(mapA).every(key => mapA[key] === mapB[key]);
}