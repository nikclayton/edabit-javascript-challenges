Create a function that accepts a string and groups repeated values. The groups should have the following structure: `[[value, first_index, last_index, times_repeated],  ...,  [value, first_index, last_index, times_repeated]]`.

*   **value:**Character being assessed.
*   **first_index:**Index of characters first appearance.
*   **last_index:**Index of characters last appearance.
*   **times_repeated:**Number of consecutive times character repeats.


### Examples ###
    findRepeating("a") ➞ [["a", 0, 0, 1]]

    findRepeating("aabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3]]

    findRepeating("1337") ➞ [["1", 0, 0, 1], ["3", 1, 2, 2], ["7", 3, 3, 1]]

    findRepeating("aabbbaabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3], ["a", 5, 6, 2], ["b", 7, 9, 3]]


### Notes ###
*   An empty string should return an empty array: `"" ➞ []`
*   Non-repeated values should start and end on the same index.