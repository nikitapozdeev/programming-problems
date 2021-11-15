/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/5318f00b31b30925fd0001f8
  Instructions: 
    Your objective is to add formatting to a plain number to display it as price.

    The function should return a string like this:

    var price = numberToPrice(13253.5123);
    console.log(price); // 13,253.51
    Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

    function should return a string 'NaN' if the input is not a valid number
*/

var numberToPrice = function(number) { 
  if (Number.isNaN(+number) || number === '') {
    return 'NaN';
  }

  const sign = Math.sign(number) === -1 ? '-' : '';
  
  let [int, dec] = number
    .toString()
    .replace('-', '')
    .split('.');
  
  const hundreds = [];
  let pos = int.length;
  while (pos > 0) {
    pos -= 3;
    hundreds.push(int.slice(Math.max(0, pos), pos + 3));
  }
  
  int = hundreds.reverse().join(',');
  dec = (dec || '').substr(0, 2).padEnd(2, '0');
  return sign + [int, dec].join('.');
}