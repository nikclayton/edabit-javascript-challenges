You are in the process of creating a chat application and want to add an **anonymous name**feature. This anonymous name feature will create an alias that consists of two capitalized words beginning with the same letter as the users first name.

Create a function that determines if the array of users is mapped to an array of anonymous names correctly.


### Examples ###
    isCorrectAliases(["Adrian M.", "Harriet S.", "Mandy T."], ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"]) ➞ true

    isCorrectAliases(["Rachel F.", "Pam G.", "Fred Z.", "Nancy K."]) ➞ ["Reassuring Rat", "Peaceful Panda", "Fantastic Frog", "Notable Nickel"] ➞ true

    isCorrectAliases(["Beth T."]) ➞ ["Brandishing Mimosa"] ➞ false
    // Both words in "Scary Mimosa" should begin with a "B" - "Brandishing Beaver" would do the trick.


### Notes ###
Both words in the alias should be capitalized.