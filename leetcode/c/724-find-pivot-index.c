/**
 * https://leetcode.com/problems/find-pivot-index/
 */

int pivotIndex(int* nums, int numsSize){
  if (numsSize == 1) {
    return 0;
  }
  
  int total = 0;
  for (int i = 0; i < numsSize; i++) {
    total += nums[i];
  }
  
  int left = 0;
  for (int i = 0; i < numsSize; i++) {
    if (left == total - left - nums[i]) {
      return i;
    }
    left += nums[i];
  }
  
  return -1;
}