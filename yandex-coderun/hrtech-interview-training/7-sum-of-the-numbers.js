const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let desiredNumber;
let carsCount;

rl.on('line', line => {
  if (desiredNumber === undefined) {
    [carsCount, desiredNumber] = line.split(' ').map(Number);
  } else {
    const cars = line.split(' ').map(Number);
    let slices = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < carsCount; ++right) {
      sum += cars[right];

      while (sum > desiredNumber) {
        sum -= cars[left];
        left++;
      }

      if (sum === desiredNumber) {
        slices++;
      }
    }

    console.log(slices);
    rl.close();
  }
});