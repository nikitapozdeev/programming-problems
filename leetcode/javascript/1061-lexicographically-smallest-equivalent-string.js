/**
 * https://leetcode.com/problems/lexicographically-smallest-equivalent-string
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const union = [];
  for (let i = 0; i < 26; i++) {
    union[i] = i;
  }

  const makeUnion = (charCodeA, charCodeB) => {
    charCodeA = find(charCodeA);
    charCodeB = find(charCodeB);

    if (charCodeA === charCodeB) {
      return;
    }

    if (charCodeA < charCodeB) {
      union[charCodeB] = charCodeA;
    } else {
      union[charCodeA] = charCodeB;
    }
  }

  const find = (code) => {
    if (union[code] === code) {
      return code;
    }

    union[code] = find(union[code]);
    return union[code];
  }

  const firstCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    makeUnion(
      s1[i].charCodeAt(0) - firstCharCode, 
      s2[i].charCodeAt(0) - firstCharCode
    );
  }

  let smallestString = '';
  for (const char of baseStr) {
    const charCode = find(char.charCodeAt(0) - firstCharCode) + firstCharCode;
    smallestString += String.fromCharCode(charCode);
  }

  return smallestString;
};