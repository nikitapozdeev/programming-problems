/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
  Instructions:
    Write a function that takes an array of numbers (integers for the tests) and a target number.
    It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

    For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
    The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
    Based on: http://oj.leetcode.com/problems/two-sum/

    twoSum [1, 2, 3] 4 === (0, 2)
*/

package kata

func TwoSum(numbers []int, target int) [2]int {
	seen := make(map[int]int)

	for i, num := range numbers {
		remainder := target - num

		if j, ok := seen[remainder]; ok {
			return [2]int{j, i}
		}

		seen[num] = i
	}
	return [2]int{}
}
