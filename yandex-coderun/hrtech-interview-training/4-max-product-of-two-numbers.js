const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let firstMin = +Infinity;
  let secondMin = +Infinity;
  const numbers = line.split(' ').map(Number);
  
  for (const num of numbers) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }

    if (num < firstMin) {
      secondMin = firstMin;
      firstMin = num;
    } else if (num < secondMin) {
      secondMin = num;
    }
  }

  if ((firstMax * secondMax) > (firstMin * secondMin)) {
    console.log(secondMax, firstMax);
  } else {
    console.log(firstMin, secondMin);
  }
  
  rl.close();
});