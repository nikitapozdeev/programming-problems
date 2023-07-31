/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
module.exports = function merge(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let current =  m + n - 1;

  while (current >= 0) {
    if (right < 0 || nums1[left] > nums2[right]) {
      nums1[current] = nums1[left];
      left--;
    } else {
      nums1[current] = nums2[right];
      right--;
    }
    current--;
  }
}