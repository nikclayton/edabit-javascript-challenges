**Harshad/Niven**numbers are positive numbers that are divisible by the sum of their digits. All single-digit numbers are Harshad numbers.

For example, 27 is a Harshad number as 2 + 7 = 9, and 9 is a divisor of 27.

Harshad numbers can occur in consecutive clusters. The numbers 1 through 10 are Harshad numbers. The numbers 132 and 133 are both Harshad numbers. The numbers 1014, 1015, 1016, 1017 are Harshad numbers.

Create a function that takes a number and returns an array of two elements. The first element is the length of the Harshad cluster of which the number is a part. The second is its order in the cluster.


### Examples ###
    harshad(5) ➞ [10, 5]
    // cluster = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // The second element should be the layman order in the
    // cluster, not the programming index.

    harshad(133) ➞ [2, 2]
    // cluster = [132, 133]

    harshad(82) ➞ [0, 0]
    // Not a Harshad number, so cluster length is 0, position is 0.


### Notes ###
N/A