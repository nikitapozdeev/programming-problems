/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
  Instructions: 
    The maximum sum subarray problem consists in finding the maximum sum of 
    a contiguous subsequence in an array or list of integers:
      maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
      // should be 6: [4, -1, 2, 1]
    Easy case is when the list is made up of only positive numbers and the maximum 
    sum is the sum of the whole array. If the list is made up of only negative numbers, 
    return 0 instead.

    Empty list is considered to have zero greatest sum. Note that the empty list or 
    array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  let startPtr = 0;
  let endPtr = 0;
  let currSum = 0;
  let maxSum = 0;
  
  while (endPtr < arr.length) {
    currSum += arr[endPtr];
    endPtr++;
    
    if (currSum < 0) {
      startPtr = endPtr;
      currSum = 0;
      continue;
    }
    
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  
  return maxSum;
}