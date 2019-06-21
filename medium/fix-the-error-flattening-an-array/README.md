I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a `.flat()`method in the Array prototype). In other words, I want to transform this: `[[1, 2], [3, 4]]`into `[1, 2, 3, 4]`.

Here is my code:

    function flatten(arr) {
      arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        arr2.concat(arr[i]);
      }
      return arr2;
    }

But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.


### Examples ###
    flatten([[1, 2], [3, 4]]) ➞ []
    // Expected: [1, 2, 3, 4]

    flatten([["a", "b"], ["c", "d"]]) ➞ []
    // Expected: ["a", "b", "c", "d"]

    flatten([[true, false], [false, false]]) ➞ []
    // Expected: [true, false, false, false]


### Notes ###
N/A