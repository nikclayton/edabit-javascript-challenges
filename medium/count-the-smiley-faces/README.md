Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:

*   A smiley has **eyes**. Eyes can be `:`or `;`.
*   A smiley has a **nose**but it doesn't have to. A nose can be `-`or `~`.
*   A smiley has a **mouth**which can be `)`or `D`.

No other characters are allowed except for those mentioned above.


### Examples ###
    countSmileys([":)", ";(", ";}", ":-D"]) ➞ 2

    countSmileys([";D", ":-(", ":-)", ";~)"]) ➞ 3

    countSmileys([";]", ":[", ";*", ":$", ";-D"]) ➞ 1


### Notes ###
*   You will always be given an array as input.
*   An empty array should return 0.
*   The order of each facial element will always be the same.
*   Noses are optional (e.g. `:)`and `:-)`are both valid).