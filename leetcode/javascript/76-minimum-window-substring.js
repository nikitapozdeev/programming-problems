/**
 * https://leetcode.com/problems/minimum-window-substring
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const wantMap = {};
  let wantCounter = 0;

  for (const char of t) {
    wantMap[char] = (wantMap[char] || 0) + 1;
    wantCounter++;
  }

  const haveMap = {};
  let haveCounter = 0;
  let left = 0;
  let result = '';

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    haveMap[rightChar] = (haveMap[rightChar] || 0) + 1;
    const have = haveMap[rightChar];
    const want = wantMap[rightChar];
    if (have <= want) {
      haveCounter++;
    }

    while (haveCounter === wantCounter) {
      const leftChar = s[left];
      const suggest = s.slice(left, right + 1);
      if (suggest.length < result.length || !result) {
        result = suggest;
      }
      haveMap[leftChar]--;
      const have = haveMap[leftChar];
      const want = wantMap[leftChar];
      if (have < want) {
        haveCounter--;
      }
      left++;
    }
  }

  return result;
};