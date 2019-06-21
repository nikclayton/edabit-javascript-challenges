Create a function that takes in an array of **intervals**and returns how many intervals overlap with a given point.

An interval overlaps a particular point if the point exists **inside**the interval, or on the interval's **boundary**. For example the point `3`overlaps with the interval `[2, 4]`(it is inside) and `[2, 3]`(it is on the boundary).

To illustrate:

    countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) ➞ 3
    // Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.


### Examples ###
    countOverlapping([[1, 2], [2, 3], [3, 4]], 5) ➞ 0

    countOverlapping([[1, 2], [5, 6], [5, 7]], 5) ➞ 2

    countOverlapping([[1, 2], [5, 8], [6, 9]], 7) ➞ 2


### Notes ###
*   Each interval is represented as an array with a start point and an endpoint.
*   Intervals count as intersecting even if they only intersect at one point, i.e. `[2, 3]`and `[3, 4]`both intersect at point `3`.
*   If it's helpful, you can draw these intervals on a line on a piece of paper.