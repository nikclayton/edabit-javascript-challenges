Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

*   R stands for Rock
*   P stands for Paper
*   S stands for Scissors


### Examples ###
    calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

    // Ben wins the first game (Paper beats Rock).
    // Abigail wins the second game (Rock beats Scissors).
    // Abigail wins the third game (Scissors beats Paper).
    // Abigail wins 2/3.

    calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

    calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"


### Notes ###
N/A