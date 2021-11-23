/*
  Level: 8 kyu
  Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
  Instructions:
    Summation
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    For example:

    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

package kata

func Summation(n int) int {
  sum := 0
  for i := 1; i <= n; i++ {
    sum += i
  }
  return sum
}