Below is an example of a **repeating cycle**.

    isRepeatingCycle([1, 2, 3, 1, 2], 3) => true
    // Since the first two elements of [1, 2, 3] equals [1, 2]

Below is an example of a **non-repeating cycle**.

    isRepeatingCycle([1, 2, 3, 1, 3], 3) => false
    // Since [1, 2, 3] != [1, 3]

You are tasked with writing a function that takes in two inputs: (1) an array of integers; (2) the length of each cycle. Return the boolean value `true`if the array is a repeating cycle, and `false`if the array is a non-repeating cycle.


### Examples ###
    isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3) ➞ true

    isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4) ➞ false

    isRepeatingCycle([1, 2, 1, 2, 2], 2) ➞ false

    isRepeatingCycle([1, 1, 1, 1], 3) ➞ true


### Notes ###
*   All cycles begin with the first element of the array.
*   Return `true`if the cycle length is greater than the array length.