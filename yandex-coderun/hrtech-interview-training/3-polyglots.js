const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let studentsCount;
let studentIndex = 0;
let languagesCount;
let languagesFrequency = {};
let commonLanguages = [];

rl.on('line', line => {
  if (studentsCount === undefined) {
    studentsCount = Number(line);
  } else {
    if (!Number.isNaN(Number(line))) {
      languagesCount = Number(line);
    } else {
      languagesFrequency[line] = (languagesFrequency[line] || 0) + 1;
      if (languagesFrequency[line] === studentsCount) {
        commonLanguages.push(line);
      }

      languagesCount--;
      if (languagesCount === 0) {
        studentIndex++;
      }
    }
  } 
  
  if (studentIndex === studentsCount) {
    console.log(commonLanguages.length);
    for (const language of commonLanguages) {
      console.log(language)
    }

    console.log(Object.keys(languagesFrequency).length)
    for (const language of Object.keys(languagesFrequency)) {
      console.log(language);
    }
    rl.close();
  }
});