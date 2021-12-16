const fs = require('fs')

// TODO: rework

const input = fs.readFileSync('../input.txt', 'utf-8');
const report = input.split('\n');
const bitsCount = report[0].length;

// part one (stupid solution)
{
  const bitsSum = Array.from({ length: bitsCount }, _ => 0);
  report.forEach(entry => {
    for (let i = 0; i < entry.length; i++) {
      bitsSum[i] += Number(entry[i]);
    }
  });

  let gammaRate = '';
  let epsilonRate = '';
  for (let i = 0; i < bitsSum.length; i++) {
    if (bitsSum[i] > report.length / 2) {
      gammaRate += '1';
      epsilonRate += '0';
    } else {
      gammaRate += '0';
      epsilonRate += '1';
    }
  }

  let consumptionPower = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

  console.log(`Consumption power is ${consumptionPower}`);
}

// part two (stupid solution)
{
  let oxygenRate = 0;
  let co2rate = 0;

  function getBitSum(arr, bitIndex) {
    let bitsSum = 0;
    arr.forEach(entry => {
      bitsSum += Number(entry[bitIndex]);
    });

    return bitsSum; 
  }

  let filtered = [...report];
  // oxygen
  for (let bitIndex = 0; bitIndex < bitsCount; bitIndex++) {
    const bitsSum = getBitSum(filtered, bitIndex);
    const mostCommonBit = bitsSum >= filtered.length / 2 ? '1' : '0';

    filtered = filtered.filter(entry => entry[bitIndex] === mostCommonBit);
    if (filtered.length === 1) {
      [oxygenRate] = filtered;
      break;
    }
  }

  // co2
  filtered = [...report];
  for (let bitIndex = 0; bitIndex < bitsCount; bitIndex++) {
    const bitsSum = getBitSum(filtered, bitIndex);
    const leastCommonBit = bitsSum >= filtered.length / 2 ? '0' : '1';

    filtered = filtered.filter(entry => entry[bitIndex] === leastCommonBit);
    if (filtered.length === 1) {
      [co2rate] = filtered;
      break;
    }
  }

  let lifeSupportRate = parseInt(oxygenRate, 2) * parseInt(co2rate, 2);

  console.log(`Life support ratings is ${lifeSupportRate}`);
}