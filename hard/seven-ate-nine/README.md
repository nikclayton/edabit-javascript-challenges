A number can **eat**the number to the right of it if it's **smaller**than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".


### Examples ###
    [5, 3, 7] ➞ [8, 7] ➞ [15]

    // 5 eats 3 to become 8
    // 8 eats 7 to become 15

    [5, 3, 9] ➞ [8, 9]

    // 5 eats 3 to become 8
    // 8 cannot eat 9, since 8 < 9

    nomNom([1, 2, 3]) ➞ [1, 2, 3]

    nomNom([2, 1, 3]) ➞ [3, 3]

    nomNom([8, 5, 9]) ➞ [22]


### Notes ###
Test input contains only an array of numbers.