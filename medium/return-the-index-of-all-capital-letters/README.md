Create a function that takes a single string as argument and returns an ordered list containing the indexes of all capital letters in the string.


### Examples ###
    indexOfCaps("eDaBiT") ➞ [1, 3, 5]

    indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]

    indexOfCaps("determine") ➞ []

    indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

    indexOfCaps("sUn") ➞ [1]


### Notes ###
*   Return an empty array if no uppercase letters are found in the string.
*   Special characters ($#@%) and numbers will be included in some test cases.