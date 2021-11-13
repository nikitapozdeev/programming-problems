/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/596f610441372ee0de00006e
  Instructions: 
    Task
    Write a function deNico/de_nico() that accepts two parameters:

    key/$key - string consists of unique letters and digits
    message/$message - string with encoded message
    and decodes the message using the key.

    First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

    For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
    Let's decode cseerntiofarmit on using our crazy key.

    1 2 3 4 5
    ---------
    c s e e r
    n t i o f
    a r m i t
      o n   
    After using the key:

    2 3 1 5 4
    ---------
    s e c r e
    t i n f o
    r m a t i
    o n

  Notes:
    The message is never shorter than the key.
    Don't forget to remove trailing whitespace after decoding the message
    
  Examples:
    deNico("crazy", "cseerntiofarmit on  ") => "secretinformation"
    deNico("abc", "abcd") => "abcd"
    deNico("ba", "2143658709") => "1234567890"
    deNico("key", "eky") => "key" 
    Check the test cases for more examples.
*/

// Stupid brutforce solution, rework needed
const deNico = (key, m) => { 
  const map = {};
  const sorted = [...key.substr(0)].sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sorted.length; i++) {
    map[sorted[i]] = i + 1; 
  }
  
  const ranks = [];
  for (let char of key) {
    ranks.push(map[char]);
  }
  
  const arr = [];
  for (let row = 0; row < m.length / key.length; row++) {
    arr.push([...m.substr(row * key.length, key.length)]);
  }
  
  let result = '';
  for (let row = 0; row < arr.length; row++) {
    for (let rank = 0; rank < ranks.length; rank++) {
      let col = ranks[rank] - 1;
      if (arr[row][col] ) {
        result += arr[row][col];
      }
    }
  }

  return result.trimEnd();
}