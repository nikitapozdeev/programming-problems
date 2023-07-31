module.exports = function(inputString) {
  const map = {
    '-----': 0,
    '.----': 1,
    '..---': 2,
    '...--': 3,
    '....-': 4,
    '.....': 5,
    '-....': 6,
    '--...': 7,
    '---..': 8,
    '----.': 9
  };
  
  const answer = [];
  for (const group of inputString.split('   ')) {
    const decodedGroup = [];
    for (const code of group.split(' ')) {
      const originalCode = modify(code);
      decodedGroup.push(map[originalCode]);
    }
    answer.push(decodedGroup.join(''));
  }

  return answer.join(' ');
}

function compress(str) {
  return str
    .split('')
    .reduce((acc, curr, index) => {
      if (index % 2 === 0) {
        acc.push(curr);
      }
      return acc;
    }, [])
    .join('');
}

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function modify(str) {
  const [modifier] = str;
  if (modifier === 'T') {
    str = reverse(str.slice(1));
  } else if (modifier === 'R') {
    str = compress(str.slice(1));
  }
  return str;
}