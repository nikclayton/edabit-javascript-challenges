Create a function that takes an array of strings representing times (`'hours:minutes:seconds'`) and returns their sum as an array of integers (`[hours, minutes, seconds]`).


### Examples ###
    timeSum(["1:23:45"]) ➞ [1, 23, 45]

    timeSum(["1:03:45", "1:23:05"]) ➞ [2, 26, 50]

    timeSum(["5:39:42", "10:02:08", "8:26:33"]) ➞ [24, 8, 23]


### Notes ###
If the input is an empty array, return `[0, 0, 0]`.