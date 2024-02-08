/**
 * https://leetcode.com/problems/sort-characters-by-frequency
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  const group = {};
  for (const [char, freq] of Object.entries(count)) {
    if (!group[freq]) {
      group[freq] = [];
    } 
    group[freq].push(char);
  }
    
  const output = [];
  for (let i = s.length; i > 0; i--) {
    if (i in group) {
      for (const char of group[i]) {
        output.push(...new Array(i).fill(char));
      }
    } 
  }
    
  return output.join('');
};