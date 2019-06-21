Create a function that flips a horizontal array into a vertical array, and a vertical array into a horizontal array.

In other words, take an `1 x n`array (1 row + n columns) and flip it into a `n x 1`array (n rows and 1 column), and vice versa.


### Examples ###
    flipArray([1, 2, 3, 4]) ➞ [[1], [2], [3], [4]]
    // Take a horizontal array and flip it vertical.

    flipArray([[5], [6], [9]]) ➞ [5, 6, 9]
    // Take a vertical array and flip it horizontal.

    flipArray([]) ➞ []


### Notes ###
If given an empty array `[]`, return an empty array `[]`.