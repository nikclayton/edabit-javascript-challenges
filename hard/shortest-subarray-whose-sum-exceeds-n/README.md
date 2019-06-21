Write a function that returns the **length of the shortest subarray**whose sum of all elements **strictly exceeds N**.


### Examples ###
    minLength([5, 8, 2, -1, 3, 4], 9) ➞ 2

    minLength([3, -1, 4, -2, -7, 2], 4) ➞ 3

    // Shortest subarray whose sum exceeds 4 is: [3, -1, 4]

    minLength([1, 0, 0, 0, 1], 1) ➞ 5

    minLength([0, 1, 1, 0], 2) ➞ -1


### Notes ###
*   The subarray should be composed of **contiguous elements**from the original array.
*   If no such subarray exists, return `-1`.