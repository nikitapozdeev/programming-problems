/**
 * https://leetcode.com/problems/search-insert-position/
 */

int searchInsert(int* nums, int numsSize, int target) 
{
  int low = 0;
  int high = numsSize - 1;
  int mid = 0;

  while (low <= high) {
    mid = (low + high) >> 1;
    int suggest = nums[mid];

    if (suggest == target) {
      return mid;
    }

    if (suggest < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return target < nums[mid] ? mid : mid + 1;
}