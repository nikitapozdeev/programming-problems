/**
 * https://leetcode.com/problems/sort-an-array
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return mergeSort(nums);
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const left = mergeSort(arr.splice(0, arr.length >> 1));
  const right = mergeSort(arr);
  return merge(left, right);
};

const merge = (left, right) => {
  let i = j = 0;
  const arr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    arr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    arr.push(right[j]);
    j++;
  }

  return arr;
};