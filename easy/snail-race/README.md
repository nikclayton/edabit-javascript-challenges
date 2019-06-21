Steve and Maurice are racing snails. They each have 3, a slow (`s`), medium (`m`) and fast (`f`) one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is (written `[Maurice, Steve]`):

1.  Round 1: `[s, f]`Sacrifice his slowest snail against Steve's fastest.
2.  Round 2: `[m, s]`Use his middle snail against Steve's slowest.
3.  Round 3: `[f, m]`Use his fastest snail against Steve's middle.

Create a function that determines whether Maurice's plan will work by outputting `true`if Maurice wins 2/3 games.

The function inputs:

1.  Array 1: `[s, m, f]`for Maurice.
2.  Array 2: `[s, m, f]`for Steve.


### Examples ###
    mauriceWins([3, 5, 10], [4, 7, 11]) ➞ true
    // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

    mauriceWins([6, 8, 9], [7, 12, 14]) ➞ false
    // Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

    mauriceWins([1, 8, 20], [2, 9, 100]) ➞ true


### Notes ###
*   Maurice wins if his competing snail's speed **strictly**exceeds Steve's competing snail's speed.
*   Steve will always play in this order: `[f, s, m]`.