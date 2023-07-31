// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки
// в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout),
// можно использовать метод console.log().
// Пример:
// console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
// rl.on('line', line => {
// const [a, b] = line.split(' ').map(Number);
//  console.log(a + b);
//  rl.close();
// });

rl.on('line', line => {
  const n = Number(line);
  const cache = new Array(n + 1).fill(+Infinity);
  cache[1] = 0;

  for (let num = 2; num <= n; num++) {
    cache[num] = Math.min(cache[num], cache[num - 1] + 1);
    
    if (num % 2 === 0) {
      cache[num] = Math.min(cache[num], cache[num / 2] + 1);
    }

    if (num % 3 === 0) {
      cache[num] = Math.min(cache[num], cache[num / 3] + 1);
    }
  }

  const path = new Array(cache[n] + 1);
  path[0] = 1;
  let num = n;
  let insertPtr = path.length - 1;
  
  while (num > 1) {
    path[insertPtr--] = num;

    if ((cache[num] - 1) === cache[num - 1]) {
      num--;
    } else if (num % 2 === 0 && (cache[num] - 1) === cache[num / 2]) {
      num /= 2;
    } else if (num % 3 === 0 && (cache[num] - 1) === cache[num / 3]) {
      num /= 3;
    }
  }
  
  console.log(cache[n]);
  console.log(path.join(' '));
});