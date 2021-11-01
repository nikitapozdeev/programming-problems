/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
  Instructions: 
    A pangram is a sentence that contains every single letter of the alphabet at 
    least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
    is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    
    Given a string, detect whether or not it is a pangram. Return True if it is, False 
    if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  const found = {};
  for (let char of string) {
    const asciiCode = char.charCodeAt(0);
    if ((65 <= asciiCode && asciiCode <= 90) || (97 <= asciiCode && asciiCode <= 122)) {
      found[char.toLowerCase()] = true;
    }
  }
  
  return Object.keys(found).length === 26;
}