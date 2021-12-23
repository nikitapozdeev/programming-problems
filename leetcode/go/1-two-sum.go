/**
 * https://leetcode.com/problems/two-sum/
 */

package main

func twoSum(nums []int, target int) []int {
	seen := make(map[int]int)

	for i, num := range nums {
			remainder := target - num

			if j, ok := seen[remainder]; ok {
					return []int{j, i}
			}

			seen[num] = i
	}

	return []int{}
}
