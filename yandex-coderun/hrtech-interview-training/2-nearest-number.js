const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineNumber = -1;
let size = 0;
let numbers = [];

rl.on('line', line => {
  lineNumber++;

  if (lineNumber === 0) {
    size = Number(line);
  } else if (lineNumber === 1) {
    numbers = line.split(' ');
  } else {
    const desired = Number(line);
    let min = +Infinity;
    let result;

    for (const num of numbers) {
      const rest = Math.abs(desired - num);
      if (rest < min) {
        min = rest;
        result = num;
      }
    }

    console.log(result);
    rl.close();
  }
});