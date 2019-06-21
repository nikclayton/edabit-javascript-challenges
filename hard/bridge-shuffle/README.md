Create a function to **bridge shuffle**two arrays. To **bridge shuffle**, you interleave the elements from both arrays in an alternating fashion, like so:

    Array 1 = ["A", "A", "A"]
    Array 2 = ["B", "B", "B"]

    Shuffled Array = ["A", "B", "A", "B", "A", "B"]

This can still work with two arrays of uneven length. We simply tack on the extra elements from the longer array, like so:

    Array 1 = ["C", "C", "C", "C"]
    Array 2 = ["D"]

    Shuffled Array = ["C", "D", "C", "C", "C"]

Create a function that takes in two arrays and returns the bridge-shuffled array.


### Examples ###
    bridgeShuffle(["A", "A", "A"], ["B", "B", "B"]) ➞ ["A", "B", "A", "B", "A", "B"]

    bridgeShuffle(["C", "C", "C", "C"], ["D"]) ➞ ["C", "D", "C", "C", "C"]

    bridgeShuffle([1, 3, 5, 7], [2, 4, 6]) ➞ [1, 2, 3, 4, 5, 6, 7]


### Notes ###
*   Elements in both arrays can be strings or integers.
*   If two arrays are of unequal length, add the additional elements of the longer array to the end of the shuffled array.
*   Always start your shuffle with the first element of Array 1.