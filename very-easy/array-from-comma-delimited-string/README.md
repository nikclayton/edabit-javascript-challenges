Write a function that turns a comma-delimited list into an array of strings.


### Examples ###
    toArray("watermelon, raspberry, orange")
    ➞ ["watermelon", "raspberry", "orange"]

    toArray("x1, x2, x3, x4, x5")
    ➞ ["x1", "x2", "x3", "x4", "x5"]

    toArray("a, b, c, d")
    ➞ ["a", "b", "c", "d"]

    toArray("")
    ➞ []


### Notes ###
Return an empty array for an empty string.