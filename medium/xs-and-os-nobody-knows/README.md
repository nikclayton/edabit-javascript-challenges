Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either `true`or `false`.

*   Return a boolean value (`true`or `false`).
*   The string can contain any character.
*   When neither an x nor an o is in the string, return `true`.


### Examples ###
    XO("ooxx") ➞ true

    XO("xooxx") ➞ false

    XO("ooxXm") ➞ true (case insensitive)

    XO("zpzpzpp") ➞ true (returns true if no x and o)

    XO("zzoo") ➞ false


### Notes ###
*   Remember to return true if there aren't any x's or o's.
*   Must be case insensitive.