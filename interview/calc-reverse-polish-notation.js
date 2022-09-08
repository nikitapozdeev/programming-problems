// Написать калькулятор выражений в обратной польской нотации. Польская нотация:

// Выражение состоит из операндов (чисел) и знаков операций +, -, *
// Выражение читается слева направо
// Операнды в выражении разделяются пробелами
// Когда в выражении встречается знак операции,
// выполняется соответствующая операция над двумя последними
// встретившимися перед ним операндами в порядке их записи
// Результатом вычисления выражения становится результат последней вычисленной операции.
// Нужно вернуть результат вычисления или сообщение об ошибке.

function calc(str) {
  const stack = [];
  for (const item of str.split(' ')) {
    if (item === '-' || item === '+' || item === '*') {
      let operandA = stack.pop()
      let operandB = stack.pop()
      if (operandA === undefined || operandB === undefined) {
        return 'Error in Syntax';
      }

      operandA = parseInt(operandA);
      operandB = parseInt(operandB);
      if (Number.isNaN(operandA) || Number.isNaN(operandB)) {
        return 'Error in Operands';
      } 

      let result;
      if (item === '-') {
        result = operandB - operandA;
      } else if (item === '+') {
        result = operandB + operandA;
      } else if (item === '*') {
        result = operandB * operandA;
      }
      stack.push(result);
    } else {
      stack.push(item);
    }
  }

  return stack.length > 1 
    ? 'Error in Syntax'
    : stack.pop()
}

console.log(calc('7 2 * 3 +')); // 7 * 2 + 3 = 17
console.log(calc('7 2 3 * -')); // 7 - (2 * 3) = 1
console.log(calc('7 2 3 1 + * -')); // 7 - 2 * (3 + 1) = -1

console.log(calc('11 -12 -')); // 11 - -12 = 23
console.log(calc('7 2 3 1 * - - 3 5 + -')); // (7- (2 - (3 * 1))) - (3 + 5)  = 0

console.log(calc('1 1 + +')); // Error in Syntax
console.log(calc('1 2 2 *')); // Error in Syntax
console.log(calc('1 b + c -')); // Error in Operands
