Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.


### Examples ###
    remix("abcd", [0, 3, 1, 2]) ➞ "acdb"

The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.

    remix("PlOt", [1, 3, 0, 2]) ➞ "OPtl"

    remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]) ➞ "cmourpte"


### Notes ###
Be sure not to change the original case; otherwise no gotchas. Assume you'll be given a string and array of equal length, both containing valid characters (A-Z, a-z, or 0-9).