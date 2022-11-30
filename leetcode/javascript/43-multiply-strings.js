/**
 * https://leetcode.com/problems/multiply-strings/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';  
  }
  
  num1 = [...num1].reverse();
  num2 = [...num2].reverse();
  const answer = new Array(num1.length + num2.length).fill(0);
  
  for (let i = 0; i < num2.length; i++) {
    const digitI = Number(num2[i]);
    
    for (let j = 0; j < num1.length; j++) {
      const digitJ = Number(num1[j]);
      
      const position = i + j;
      const carry = answer[position];
      const mul = (digitI * digitJ) + carry;
      
      answer[position] = mul % 10;
      answer[position + 1] += Math.floor(mul / 10);
    }
  }
  
  if (answer[answer.length - 1] === 0) {
    answer.pop();
  }
  
  return answer.reverse().join('');
};