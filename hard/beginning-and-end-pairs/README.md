Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.


### Examples ###
    pairs([1, 2, 3, 4, 5, 6, 7]) ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]

    pairs([1, 2, 3, 4, 5, 6]) ➞ [[1, 6], [2, 5], [3, 4]]

    pairs([5, 9, 8, 1, 2]) ➞ [[5, 2], [9, 1], [8, 8]]

    pairs([]) ➞ []


### Notes ###
*   If the array has an **odd length**, repeat the middle element twice for the last pair.
*   Return an empty array if the input is an empty array.