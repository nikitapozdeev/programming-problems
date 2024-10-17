/**
 * https://leetcode.com/problems/maximum-swap
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = String(num).split('').map(Number);
  const max = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; --i) {
    max[i] = Math.max(arr[i], max[i + 1] ?? -Infinity);
  }

  const findFarMaxIndex = (value) => {
    for (let i = max.length - 1; i >= 0; i--) {
      if (max[i] === value) {
        return i;
      }
    }
  }

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < max[i]) {
      const j = findFarMaxIndex(max[i]);
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      break;
    }
  }

  return Number(arr.join(''));
};