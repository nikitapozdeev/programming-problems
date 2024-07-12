/**
 * https://leetcode.com/problems/maximum-score-from-removing-substrings
 */

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  const removePair = (arr, pair) => {
    let write = 0;
    let pairs = 0;
    
    for (let read = 0; read < arr.length; ++read) {
      arr[write] = arr[read];
      write++;

      if (write > 1 && chars[write - 2] === pair[0] && chars[write - 1] === pair[1]) {
        write -= 2;
        pairs++;
      }
    }

    while (write < chars.length) {
      chars.pop();
    }

    return pairs;
  }

  const chars = s.split('');
  let points = 0;

  if (x > y) {
    points += removePair(chars, 'ab') * x;
    points += removePair(chars, 'ba') * y;
  } else {
    points += removePair(chars, 'ba') * y;
    points += removePair(chars, 'ab') * x;
  }

  return points;
};