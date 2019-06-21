A city skyline can be represented as a 2-D array with `1`s representing buildings. In the example below, the height of the tallest building is **4**(second-most right column).

    [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1]]

Create a function that takes a **skyline**(2-D array of 0's and 1's) and returns the height of the tallest skyscraper.


### Examples ###
    tallestSkyscraper([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]
    ]) ➞ 3

    tallestSkyscraper([
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]
    ]) ➞ 4

    tallestSkyscraper([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 1, 1, 1]
    ]) ➞ 2


### Notes ###
N/A