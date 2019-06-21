The Bell number is the number of ways an array of x items can be partitioned into non-empty subarrays. See the resources section for an in-depth explanation.

Create a function that takes a number x and returns the corresponding Bell number.


### Examples ###
    bell(1) ➞ 1
    // sample_lst = [1], possible_partitions = [[[1]]]

    bell(2) ➞ 2
    // sample_lst = [1, 2], poss_part = [[[1, 2]], [[1], [2]]]

    bell(3) ➞ 5
    // sample_lst = [1, 2, 3], poss_part = [[[1, 2, 3]], [[1, 2], [3]], [[1], [2, 3]], [[1, 3], [2]], [[1], [2],[3]]]


### Notes ###
N/A