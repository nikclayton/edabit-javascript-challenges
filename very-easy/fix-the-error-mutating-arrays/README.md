Suppose I want to define a function that removes the last element of an array each time I call it, but **does not mutate the original array**. Fix the code so that the results are no longer mutating the array.

    function minusOne(arr) {
      arr.pop()
      return arr
    }


### Examples ###
    x = [1, 2, 3, 4, 5]
    minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
    minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
    minusOne(x) ➞ [1, 2]  // 3rd time function is called.
    minusOne(x) ➞ [1]  // 4th time function is called.

    // What I want instead:
    minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
    minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
    minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
    minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.


### Notes ###
N/A