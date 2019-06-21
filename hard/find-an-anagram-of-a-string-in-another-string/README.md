Create a function that takes two strings and determines if an anagram of the first string is in the second string. Anagrams of "bag" are "bag", "bga", "abg", "agb", "gab", "gba". Since none of those anagrams are in "grab", the answer is false. A "g", "a", and "b" are in the string "grab", but they're split up by the "r".


### Examples ###
    ana_str_str("car", "race") ➞ true

    ana_str_str("nod", "done") ➞ true

    ana_str_str("bag", "grab") ➞ false


### Notes ###
*   Inputs will be valid strings in all lowercase letters.
*   There exists a linear time algorithm for this.