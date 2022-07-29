/**
 * https://leetcode.com/problems/pascals-triangle/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const output = [];
  output.push([1]);
  
  for (let i = 2; i <= numRows; ++i) {
    const row = [];
    row.push(1);
    
    let steps = i - 2;
    const previousRow = output[steps];
    for (let j = 0; j < steps; ++j) {
      const sum = previousRow[j] + previousRow[j + 1];
      row.push(sum);
    }
   
    row.push(1);
    output.push(row);
  }
  
  return output;
};