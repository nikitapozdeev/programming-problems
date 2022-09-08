// Реализовать функцию isPalindrome, которая возвращает true или false в зависимости от того,
// является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).

// Примеры палиндромов:

/*
A man, a plan, a canal, Panama!
Never odd or even
И у облаков вокал Боуи
А роза упала на лапу Азора
*/

function isPalindrome(str) {
  if (!str) {
    return true;
  }

  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const a = str[start];
    const b = str[end];

    if (!/\w+/.test(a)) {
      start++;
      continue;
    }

    if (!/\w+/.test(b)) {
      end--;
      continue;
    }

    if (a !== b) {
      return false;
    }
    
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal, Panama!'));
console.log(isPalindrome('Never odd or even'));
console.log(isPalindrome('И у облаков вокал Боуи'));
console.log(isPalindrome('А роза упала на лапу Азора'));

