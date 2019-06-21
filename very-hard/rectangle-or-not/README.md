Create a function that determines whether four coordinates properly create a rectangle. A rectangle has 4 sides and has 90 degrees for each angle. Coordinates are given as strings containing an x- and a y- coordinate: `"(x, y)"`.

For this problem, assume none of the rectangles are tilted.

    isRectangle(["(0, 0)", "(0, 1)", "(1, 0)", "(1,1)"]) ➞ true


### Examples ###
    isRectangle(["(-4, 3)", "(4, 3)", "(4, -3)", "(-4, -3)"]) ➞ true

    isRectangle(["(0, 0)", "(0, 1)"]) ➞ false
    // A line is not a rectangle!

    isRectangle(["(0, 0)", "(0, 1)", "(1, 0)"]) ➞ false
    // Neither is a triangle!

    isRectangle(["(0, 0)", "(9, 0)", "(7, 5)", "(16, 5)"]) ➞ false
    // A parallelogram, but not a rectangle!


### Notes ###
*   A square is also a rectangle!
*   A parallelogram is NOT necessarily a rectangle (the rectangle is a special case of a parallelogram).
*   If the input is fewer than or greater than 4 coordinates, return `false`.