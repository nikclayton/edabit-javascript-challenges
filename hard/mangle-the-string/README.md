Create a function that takes a string and replaces every letter with the letter following it in the alphabet ("c" becomes "d", "z" becomes "a", "b" becomes "c", etc). Then capitalize every vowel (a, e, i, o, u) and return the new modified string.


### Examples ###
    mangled("Fun times!") ➞ "GvO Ujnft!"

    mangled("The quick brown fox.") ➞ "UIf rvjdl cspxO gpy."

    mangled("Omega") ➞ "Pnfhb"


### Notes ###
*   "y" is not considered a vowel.
*   All test cases contain valid strings.