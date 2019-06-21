Create a function that returns `true`if three points belong to the same line, and `false`otherwise. Each point is represented by an array consisting of an x- and y-coordinates.


### Examples ###
    sameLine([[0, 0], [1, 1], [3, 3]]) ➞ true

    sameLine([[-2, -1], [2, 1], [0, 0]]) ➞ true

    sameLine([[-2, 0], [-10, 0], [-8, 0]]) ➞ true

    sameLine([[0, 0], [1, 1], [1, 2]]) ➞ false

    sameLine([[3, 4], [3, 5], [6, 6]]) ➞ false


### Notes ###
Note the special case of a vertical line.