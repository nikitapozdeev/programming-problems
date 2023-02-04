/**
 * https://leetcode.com/problems/permutation-in-string
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Map = {};
  const s2Map = {};
  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
    s2Map[s2[i]] = (s2Map[s2[i]] || 0) + 1; 
  }

  const matchesNeed = Object.keys(s1Map).length;
  let matches = 0;
  const seen = {}
  for (let i = 0; i < s1.length; i++) {
    if (!seen[s2[i]] && s1Map[s2[i]] === s2Map[s2[i]]) {
      matches++;
    }
    seen[s2[i]] = true;
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === matchesNeed) {
      return true;
    }

    const leftChar = s2[left];
    const rightChar = s2[right];

    s2Map[rightChar] = (s2Map[rightChar] || 0) + 1;
    if (s1Map[rightChar] === s2Map[rightChar]) {
      matches++;
    } else if ((s1Map[rightChar] + 1) === s2Map[rightChar]) {
      matches--;
    }

    s2Map[leftChar] = (s2Map[leftChar] || 0) - 1;
    if (s1Map[leftChar] === s2Map[leftChar]) {   
      matches++;
    } else if ((s1Map[leftChar] - 1) === s2Map[leftChar]) {
      matches--;
    }
    
    left++;
  }
 
  return matches === matchesNeed;
};