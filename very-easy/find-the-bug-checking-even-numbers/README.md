Create a function that takes in an array and returns `true`if all its values are even, and `false`otherwise.

Not a big deal, your friend says. He writes the following code:

    function checkAllEven(arr) {
      return arr.every(x % 2 === 0)
    }

The code above leads to a `Reference Error`, with `x`being undefined. Fix the code above so that all tests pass:


### Examples ###
    checkAllEven([1, 2, 3, 4]) ➞ false

    checkAllEven([2, 4, 6]) ➞ true

    checkAllEven([5, 6, 8, 10]) ➞ false

    checkAllEven([-2, 2, -2, 2]) ➞ true


### Notes ###
For help, check **Resources**or ask a question in the **Comments**.