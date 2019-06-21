Create a function that, given a **string**with at least **three characters**, returns an array of its:

1.  Length.
2.  First character.
3.  Last character.
4.  Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
5.  Index of the second occurrence of the second character in the format **"@ index #"**and **"not found"**if the second character doesn't occur again.


### Examples ###
    allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

    allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

    allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]


### Notes ###
N/A