Write a function that determines if an array is **circular**. An array is **circular**if **its subarrays can be reordered such that**each subarray's last element is equal to the next subarray's first element.

For example, the array `[[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]]`**is circular**because we can re-arrange the elements to create the following array:

    [[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]


### Examples ###
    isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]) ➞ true
    // Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]

    isCircular([[1, 1], [1, 2]]) ➞ false

    isCircular([[2, 1], [1, 2]]) ➞ true

    isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]) ➞ false


### Notes ###
*   In a circular re-ordering, the last subarray's last element must be identical to the first subarray's first element.
*   Subarrays will contain at least one element.