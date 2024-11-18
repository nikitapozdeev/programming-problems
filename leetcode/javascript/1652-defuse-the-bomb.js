/**
 * https://leetcode.com/problems/defuse-the-bomb
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const size = code.length;
  const absK = Math.abs(k);
  const decrypted = new Array(size).fill(0);

  if (k === 0) {
    return decrypted;
  }

  let left = 0;
  let sum = 0;

  for (let right = 0; right < size + absK; ++right) {
    sum += code[right % size];

    if ((right - left + 1) > absK) {
      sum -= code[left % size];
      left = (left + 1) % size;
    } 

    if ((right - left + 1) === absK) {
      if (k > 0) {
        decrypted[(left === 0 ? (size - 1) : (left - 1)) % size] = sum;
      } else {
        decrypted[(right + 1) % size] = sum;
      }
    }
  }

  return decrypted; 
};