Mona has created a method to sort an array in ascending order.

Starting from the left of the array, she compares numbers by pairs. If the first pair is ordered `[smaller number, larger number]`, she moves on. If the first pair is ordered `[larger number, smaller number]`, she swaps the two integers before moving on to the next pair. She repeats this process until she reaches the end of the array.

Then, she moves back to the beginning of the array and repeats this process until the entire array is sorted.

If the unsorted array is: `[3, 9, 7, 4]`, she will perform the following steps (note *Swaps*here refers to cumulative swaps):

1.  She starts with the first pair.
2.  `[3, 9]`is in order, move on. Array: `[3, 9, 7, 4]`. Swaps: `0`.
3.  `[9, 7]`is not. Swap. Array: `[3, 7, 9, 4]`. Swaps: `1`
4.  `[9, 4]`is not. Swap. Array: `[3, 7, 4, 9]`. Swaps: `2`
5.  Check if array is sorted. It is not, so start over at first pair.
6.  `[3, 7]`is in order, move on. Array: `[3, 7, 4, 9]`. Swaps: `2`
7.  `[7, 4]`is not. Swap. Array: `[3, 4, 7, 9]`. Swaps: `3`.
8.  `[7, 9]`is in order, move on. Array: `[3, 4, 7, 9]`. Swaps: `3`.
9.  Check if array is sorted. It is. End.

Sorting the array `[3, 9, 7, 4]`takes her *3 swaps*. Write a function that takes in an unsorted array and returns the number of swaps it takes for the array to be sorted according to Mona's algorithm.


### Examples ###
    numberOfSwaps([5, 4, 3]) ➞ 3

    numberOfSwaps([1, 3, 4, 5]) ➞ 0

    numberOfSwaps([5, 4, 3, 2]) ➞ 6


### Notes ###
N/A