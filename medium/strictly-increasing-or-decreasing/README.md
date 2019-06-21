Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.


### Examples ###
    check([1, 2, 3]) ➞ "increasing"

    check([3, 2, 1]) ➞ "decreasing"

    check([1, 2, 1]) ➞ "neither"

    check([1, 1, 2]) ➞ "neither"


### Notes ###
*   The last example does NOT count as strictly increasing, since 1-indexed `1`is not strictly greater than the 0-indexed `1`.
*   Input arrays have a minimum length of 2.