/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/53368a47e38700bd8300030d
  Instructions: 
    Create a function that returns the sum of the two lowest positive 
    numbers given an array of minimum 4 positive integers. No floats or non-positive 
    integers will be passed.
    
    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
  const [first, second] = numbers;
  let lowestFirst = Math.min(first, second);
  let lowestSecond = Math.max(first, second);
  
  for (let i = 2; i < numbers.length; i++) {
    const num = numbers[i];
    if (num < lowestFirst) {
      lowestSecond = lowestFirst;
      lowestFirst = num;
    } else if (num < lowestSecond) {
      lowestSecond = num;
    }
  }
  return lowestFirst + lowestSecond;
}