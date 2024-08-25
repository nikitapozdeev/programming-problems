import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func getPalindrome(number int) int {
	str := strconv.Itoa(number)
	runes := []rune(str)
	left, right := 0, len(runes)-1

	for left < right {
		runes[right] = runes[left]
		left++
		right--
	}

	palindrome, _ := strconv.Atoi(string(runes))
	return palindrome
}

func getSmallerPalindrome(number int) *int {
	low, high := 0, number
	var smaller *int

	for low <= high {
		mid := (low + high) / 2
		palindrome := getPalindrome(mid)

		if palindrome < number {
			low = mid + 1
			smaller = &palindrome
		} else {
			high = mid - 1
		}
	}

	return smaller
}

func getGreaterPalindrome(number int) *int {
	low, high := number, int(math.Pow(10, 18))-1
	var greater *int

	for low <= high {
		mid := (low + high) / 2
		palindrome := getPalindrome(mid)

		if palindrome > number {
			high = mid - 1
			greater = &palindrome
		} else {
			low = mid + 1
		}
	}

	return greater
}

func nearestPalindromic(n string) string {
	number, _ := strconv.Atoi(n)
	smaller := getSmallerPalindrome(number)
	greater := getGreaterPalindrome(number)

	if smaller != nil && (number-*smaller) <= (*greater-number) {
		return strconv.Itoa(*smaller)
	}

	return strconv.Itoa(*greater)
}