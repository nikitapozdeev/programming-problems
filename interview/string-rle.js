// Кодирование повторов — алгоритм сжатия данных,
// заменяющий повторяющиеся символы (серии) на один символ и число его повторов.
// Серией называется последовательность, состоящая из нескольких одинаковых символов.
// При кодировании (упаковке, сжатии) строка одинаковых символов,
// составляющих серию, заменяется строкой, содержащей сам повторяющийся символ и количество его повторов. 
// В задаче необходимо опустить количество повторений, если оно равно 1

function stringRLE(str) {
  if (!str) {
    return str;
  }

  const result = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];
    if (current === next) {
      count++;
    } else {
      result.push(`${current}${count > 1 ? count : ''}`);
      count = 1;
    }
  }
  return result.join('');
}

console.log(stringRLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB') === 'AB3C2XYZD4E3F3A6B28');