Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

1.  If the length of the string is less than two, return `"Incompatible."`.
2.  If the argument is not a string, return `"Incompatible."`.
3.  If the first and last characters are the same, return `"Two's a pair."`.


### Examples ###
    flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

    flipEndChars("ada") ➞ "Two's a pair."

    flipEndChars("Ada") ➞ "adA"

    flipEndChars("z") ➞ "Incompatible."

    flipEndChars([1, 2, 3]) ➞ "Incompatible."


### Notes ###
Tests are case sensitive (e.g. "A" and "a" are not the same character).