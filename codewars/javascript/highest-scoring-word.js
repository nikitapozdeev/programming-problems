/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
  Instructions: 
    Given a string of words, you need to find the highest scoring word.
    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    
    You need to return the highest scoring word as a string.
    
    If two words score the same, return the word that appears earliest 
    in the original string.

    All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let highestString = '';
  let highestWeight = 0;
  
  const getWordWeight = (word) => {
    let weight = 0;
    let offset = 'a'.charCodeAt(0) - 1;
    for (const char of word) {
      weight += char.charCodeAt(0) - offset;
    }
    return weight;
  }
  
  for (const word of x.split(' ')) {
    const wordWeight = getWordWeight(word);
    if (wordWeight > highestWeight) {
      highestWeight = wordWeight
      highestString = word;
    }
  }
  return highestString;
}
