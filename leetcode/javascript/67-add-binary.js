/**
 * https://leetcode.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let max;
  let min;
  if (a.length > b.length) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  const output = [];
  let offset = max.length - min.length;
  let remainder = 0;
  for (let i = max.length - 1; i >= 0; --i) {
    const sum = Number(max[i]) + Number(min[i - offset] || 0) + remainder;
    const bSum = Number(max[i]) ^ Number(min[i - offset] || 0) ^ remainder;
    remainder = sum > 1 ? 1 : 0;
    output.push(bSum);
  }
  
  if (remainder === 1) {
    output.push(1);
  }
  
  return output.reverse().join('');
};