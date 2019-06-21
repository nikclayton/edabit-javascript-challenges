Write a function that sort each string in an array by the letter in alphabetic ascending order (`a-z`).


### Examples ###
    sortByLetter(["932c", "832u32", "2344b"])
    ➞ ["2344b", "932c", "832u32"]

    sortByLetter(["99a", "78b", "c2345", "11d"])
    ➞ ["99a", "78b", "c2345", "11d"]

    sortByLetter(["572z", "5y5", "304q2"])
    ➞ ["304q2", "5y5", "572z"]

    sortByLetter([])
    ➞ []


### Notes ###
*   Each string will only have one (lowercase) letter.
*   If given an empty array, return an empty array.