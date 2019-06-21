Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.


### Examples ###
    uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

    uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

    uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]


### Notes ###
*   The initial sequence of items can be either a string or an array.
*   Tests are case sensitive.