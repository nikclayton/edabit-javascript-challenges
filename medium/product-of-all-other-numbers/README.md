You have an array of integers, and for each index you want to find the product of *every integer except the integer at that index*.

Create a function that takes an array of integers and returns an array of the products.


### Examples ###
    getProducts([1, 7, 3, 4]) ➞ [84, 12, 28, 21]

    getProducts([1, 7, 3, 4]) ➞ [84, 12, 28, 21]

    getProducts([1, 2, 3, 0, 5]) ➞ [0, 0, 0, 30, 0]


### Notes ###
You can't use division, otherwise you might end up dividing by 0 and the universe would end.