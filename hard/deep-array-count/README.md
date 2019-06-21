Create a function that takes an array and returns the number of ALL elements within it (including those within the inner-level array(s)).


### Examples ###
    deepCount([1, 2, 3]) ➞ 3

    deepCount([[1], [2], [3]]) ➞ 6

    deepCount(["x", "y", ["z"]]) ➞ 4

    deepCount(["a", "b", ["c", "d", ["e"]]]) ➞ 7


### Notes ###
In the examples above, notice how the sub-arrays within the main array count as an element *as well as*the elements within that sub-array.