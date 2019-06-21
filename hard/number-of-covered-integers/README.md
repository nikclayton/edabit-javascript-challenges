Write a function that returns the total number of **integers**covered from an array of intervals (**inclusive**).


### Examples ###
    coveredIntegers([[80, 81], [1, 2], [9, 11]]) ➞ 7
    // 7 Integers are covered: 1, 2, 9, 10, 11, 80, 81

    coveredIntegers([[3, 6], [4, 6], [5, 6]]) ➞ 4

    coveredIntegers([[1, 2], [1, 2]]) ➞ 2


### Notes ###
*   Intervals may overlap, be subintervals of each other, or be identical.
*   For each interval `[l, u]`, `l`and `u`will be integers, and `l <= u`will always be true.