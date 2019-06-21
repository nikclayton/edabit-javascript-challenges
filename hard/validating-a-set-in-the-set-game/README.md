In the game **Set**, **3 cards form a set**if each of the cards are identical or completely different for each of the **4 properties**. All 3 cards must:

1.  Have the **same color**or **different colors**.
2.  Have the **same number**or **different numbers**.
3.  Have the **same shades**or **different shades**.
4.  Have the **same shape**or **different shapes**.

The 4 properties are:

1.  Colors: red, purple, green
2.  Numbers: 1, 2, 3
3.  Shades: empty, lined, full
4.  Shapes: squiggle, oval, diamond

Here, a set is represented by an array containing 3 cards. Each card is represented by an object of properties and values. Write a function that determines whether 3 cards constitute a valid set.

Here is an example of a **set**:

    [
      { color: "red", number: 1, shade: "empty", shape: "squiggle" },
      { color: "red", number: 2, shade: "lined", shape: "diamond" },
      { color: "red", number: 3, shade: "full", shape: "oval" }
    ]

    // "Same" properties: color
    // "Different" properties: numbers, shading and shapes

The following is **not a set**:

    [
      { color: "red", number: 1, shade: "empty", shape: "squiggle" },
      { color: "red", number: 2, shade: "lined", shape: "diamond" },
      { color: "purple", number: 3, shade: "full", shape: "oval" }
    ]

    // Colors are not all identical, but not all different.


### Examples ###
    isSet([
      { color: "green", number: 1, shade: "empty", shape: "squiggle" },
      { color: "green", number: 2, shade: "empty", shape: "diamond" },
      { color: "green", number: 3, shade: "empty", shape: "oval" }
    ]) ➞ true

    isSet([
      { color: "purple", number: 1, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 1, shade: "full", shape: "oval" }
    ]) ➞ true

    isSet([
      { color: "purple", number: 3, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 3, shade: "full", shape: "oval" }
    ]) ➞ false


### Notes ###
*   A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
*   You can play Set here: [https://www.setgame.com/set/puzzle](<https://www.setgame.com/set/puzzle>)