Given an unsorted array, create a function that returns the **nth**smallest element (the smallest element is the **first smallest**, the second smallest element is the **second smallest**, etc).


### Examples ###
    nthSmallest([1, 3, 5, 7], 1) ➞ 1

    nthSmallest([1, 3, 5, 7], 3) ➞ 5

    nthSmallest([1, 3, 5, 7], 5) ➞ null

    nthSmallest([7, 3, 5, 1], 2) ➞ 3


### Notes ###
*   **n >= 1 **
*   The array does not have to be ordered.
*   Each number in the array will be distinct - there will be a clear ordering.
*   Given an out of bounds parameter (e.g. an array is of size **k**), and you are asked to find the **m > k**smallest element, return `null`.