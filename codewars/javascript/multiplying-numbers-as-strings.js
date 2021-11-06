/*
  Level: 4 kyu
  Link: https://www.codewars.com/kata/55911ef14065454c75000062
  Instructions: 
    This is the first part. 
    You can solve the second part here when you are done with this. 
    Multiply two numbers! Simple!

    The arguments are passed as strings.
    The numbers may be way very large
    Answer should be returned as a string
    The returned "number" should not start with zeros e.g. 0123 is invalid
    Note: 100 randomly generated tests!
*/

function multiply(a, b) {
  const numA = BigInt(a);
  const numB = BigInt(b);
  return String(BigInt(numA * numB));
}