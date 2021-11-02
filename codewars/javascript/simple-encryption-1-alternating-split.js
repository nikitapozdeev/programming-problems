/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/57814d79a56c88e3e0000786
  Instructions: 
    Implement a pseudo-encryption algorithm which given a string S and an integer N 
    concatenates all the odd-indexed characters of S with all the even-indexed characters 
    of S, this process should be repeated N times.

  Examples:
    encrypt("012345", 1)  =>  "135024"
    encrypt("012345", 2)  =>  "135024"  ->  "304152"
    encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

    encrypt("01234", 1)  =>  "13024"
    encrypt("01234", 2)  =>  "13024"  ->  "32104"
    encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
    
    Together with the encryption function, you should also implement a decryption 
    function which reverses the process.

    If the string S is an empty value or the integer N is not positive, return the 
    first argument without changes.
*/

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  
  let result = text;
  let odd, even;
  for (let i = 0; i < n; i++) {
    odd = even = '';
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        odd += result[j];
      } else {
        even += result[j];
      }
    }
    result = even + odd;
  }
  return result;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  
  const midpoint = encryptedText.length / 2;
  let result = encryptedText;
  let buf;
  
  for (let i = 0; i < n; i++) {
    buf = '';
    const first = result.substr(0, midpoint);
    const second = result.substr(midpoint);
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === j - 1) {
        buf += first[j] || '';
        buf += second[j] || '';
      } else { 
        buf += second[j] || '';
        buf += first[j] || '';
      }
    }
    result = buf;
  }
  return result;
}