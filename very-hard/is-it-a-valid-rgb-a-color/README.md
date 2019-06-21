Given an RGB(A) CSS color, determine whether its format is valid or not. Create a function that takes a string (e.g. `"rgb(0, 0, 0)"`) and return `true`if it's format is correct, otherwise return `false`.


### Examples ###
    validColor("rgb(0,0,0)") ➞ true

    validColor("rgb(0,,0)") ➞ false

    validColor("rgb(255,256,255)") ➞ false

    validColor("rgba(0,0,0,0.123456789)") ➞ true


### Notes ###
There are a few edge cases. Check out the **Tests**tab to know more.