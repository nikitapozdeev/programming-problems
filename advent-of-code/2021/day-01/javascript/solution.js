const fs = require("fs");

const input = fs.readFileSync('../input.txt', 'utf8');
const depths = input.split('\n').map(Number);

// part one 
{ 
  let counter = 0;
  for (let i = 0; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      counter++;
    }
  }
  
  console.log(`Depth increases ${counter} times.`);
}

// part two
{ 
  let counter = 0;
  let prevSum;

  for (let i = 0; i < depths.length; i++) {
    let currentSum = depths[i] + depths[i + 1] + depths[i + 2];
    if (Number.isNaN(currentSum)) {
      break;
    }

    if (currentSum > prevSum) {
      counter++;
    }

    prevSum = currentSum;
  }

  console.log(`Depth increases in 3-digit sliding window ${counter} times.`)
}