/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245
  Instructions: 
    Write Number in Expanded Form
    You will be given a number and you will need to return it as a string 
    in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
    NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  const result = [];
  let remainder = num;
  while (remainder !== 0) {
    const str = `${remainder}`;
    const [firstDigit] = str;
    const part = +firstDigit * 10 ** (str.length - 1);
    result.push(part);
    remainder -= part;
  }
  return result.join(' + ');
}