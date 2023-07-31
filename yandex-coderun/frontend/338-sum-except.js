function sumExcept(arr, from, count) {
  from = (Number.isInteger(from) && from >= 0) ? from : 0;
  count = (Number.isInteger(count) && count >= 0) ? count : 0;
  
  let sum = 0;
  let index = 0
  while (index < from) {
    sum += (Number.isInteger(arr[index]) ? arr[index] : 0);
    index++;
  }

  index += count;
  for (let i = index; i < arr.length; i++) {
    sum += (Number.isInteger(arr[i]) ? arr[i] : 0);
  }

  return sum;
}