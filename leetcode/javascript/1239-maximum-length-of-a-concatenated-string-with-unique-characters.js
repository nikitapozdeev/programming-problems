/**
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters
 */

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  const getBits = (str) => {
    let bits = 0;
    let offset = 'a'.charCodeAt(0);

    for (let i = 0; i < str.length; i++) {
      if (bits & (1 << (str.charCodeAt(i) - offset))) {
        return 0;
      }

      bits |= 1 << (str.charCodeAt(i) - offset);
    }

    return bits;
  }

  const countSetBits = (bits) => {
    let count = 0;
    while (bits) {
      count += bits & 1;
      bits >>= 1;
    }
    return count;
  }

  let charBits = 0;

  const backtrack = (i) => {
    if (i === arr.length) {
      return countSetBits(charBits);
    }

    let res = 0;
    const strBits = getBits(arr[i]);

    if ((charBits & strBits) === 0) {
      charBits |= strBits;
      res = backtrack(i + 1);
      charBits &= ~strBits;
    }

    return Math.max(res, backtrack(i + 1));
  }

  return backtrack(0);
};