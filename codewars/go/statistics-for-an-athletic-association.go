/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/55b3425df71c1201a800009c
  Instructions:
    You are the "computer expert" of a local Athletic Association (C.A.A.).
		Many teams of runners come to compete. Each time you get a string of all race results of every
		team who has run. For example here is a string showing the individual results of a team of 5 runners:
		"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

		Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds)
		are positive or null integer (represented as strings) with one or two digits. Substrings in the input
		string are separated by , or ,.
		To compare the results of the teams you are asked for giving three statistics; range, average and median.

		Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3,
		and the highest is 9, so the range is 9 − 3 = 6.

		Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum
		by the total count of numbers.

		Median : In statistics, the median is the number separating the higher half of a data sample from the lower
		half. The median of a finite list of numbers can be found by arranging all the observations from
		lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5)
		when there is an odd number of observations. If there is an even number of observations, then there is
		no single middle value; the median is then defined to be the mean of the two middle values
		(the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

		Your task is to return a string giving these 3 values. For the example given above, the string result will be
		"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
		of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
		where hh, mm, ss are integers (represented by strings) with each 2 digits.

	Remarks:
		if a result in seconds is ab.xy... it will be given truncated as ab.
		if the given string is "" you will return ""
*/

package kata

import (
	"fmt"
	"math"
	"sort"
	"strconv"
	"strings"
)

func formatResult(result int) string {
	hours := result / 3600
	minutes := (result / 60) % 60
	seconds := result % 60
	return fmt.Sprintf("%02d|%02d|%02d", hours, minutes, seconds)
}

func Stati(strg string) string {
	if strg == "" {
		return strg
	}

	substr := strings.Split(strg, ", ")
	count := len(substr)
	results := make([]int, count)
	total := 0

	for idx, res := range substr {
		resArgs := strings.Split(res, "|")
		h, _ := strconv.Atoi(resArgs[0])
		m, _ := strconv.Atoi(resArgs[1])
		s, _ := strconv.Atoi(resArgs[2])

		result := h*3600 + m*60 + s
		results[idx] = result

		total += result
	}
	sort.Sort(sort.IntSlice(results))

	var median int
	if count%2 == 0 {
		midpoint := int(math.Floor(float64(count / 2)))
		prev := results[midpoint-1]
		next := results[midpoint]
		median = int((prev + next) / 2)
	} else {
		median = results[count/2]
	}

	rng := formatResult(results[count-1] - results[0])
	avg := formatResult(total / count)
	med := formatResult(median)

	return fmt.Sprintf("Range: %s Average: %s Median: %s", rng, avg, med)
}
