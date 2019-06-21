Create a function that retrieves every number that is **strictly larger**than every number that follows it.


### Examples ###
    largerThanRight([3, 13, 11, 2, 1, 9, 5]) ➞ [13, 11, 9, 5]
    // 13 is larger than all numbers to its right, etc.

    largerThanRight([5, 5, 5, 5, 5, 5]) ➞ [5]
    // Must be strictly larger.
    // Always include the last number.

    largerThanRight([5, 9, 7, 8]) ➞ [9, 7, 8]


### Notes ###
The last number in an array is trivially strictly larger than all numbers that follow it (no numbers follow it).