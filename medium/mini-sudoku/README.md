A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consist of the numbers 1-9.

For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.


### Examples ###
    isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]) ➞ true

    isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]) ➞ false
    // The 1 is repeated twice

    isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]]) ➞ false
    // The 0 is included (outside range)

    isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]) ➞ true


### Notes ###
N/A