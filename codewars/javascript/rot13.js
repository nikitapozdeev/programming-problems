/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/530e15517bc88ac656000716
  Instructions: 
    ROT13 is a simple letter substitution cipher that replaces a letter with the 
    letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. 
    If there are numbers or special characters included in the string, they should be 
    returned as they are. Only letters from the latin/english alphabet should be shifted, 
    like in the original Rot13 "implementation".
*/

function wrap(lower, upper, value) {
  const size = upper - lower + 1;
  return lower + (value - lower) % size;
}

function rot13(message){
  let result = '';
  for (let char of message) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      code = wrap(65, 90, code + 13);
    } else if (code >= 97 && code <= 122) {
      code = wrap(97, 122, code + 13);       
    }
    result += String.fromCharCode(code);
  }
  return result;
}