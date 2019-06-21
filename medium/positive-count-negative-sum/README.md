Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.


### Examples ###
    countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]

    countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

    countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

    countPosSumNeg(null) ➞ []

    countPosSumNeg([]) ➞ []


### Notes ###
If the input array is empty or null, return an empty array.