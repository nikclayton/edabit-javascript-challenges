Write a sorting function that takes in an array of names and sorts them **by last name**either alphabetically (`ASC`) or reverse-alphabetically (`DESC`).


### Examples ###
    sortContacts([
      "John Locke",
      "Thomas Aquinas",
      "David Hume",
      "Rene Descartes"
    ], "ASC")

    ➞ ["Thomas Aquinas", "Rene Descartes", "David Hume", "John Locke"]
    // Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

    sortContacts([
      "Paul Erdos",
      "Leonhard Euler",
      "Carl Gauss"
    ], "DESC")

    ➞ ["Carl Gauss", "Leonhard Euler", "Paul Erdos"]
    // Gauss (G) > Euler (EU) > Erdos (ER)

    sortContacts(["Albert Einstein"], "ASC") ➞ ["Albert Einstein"]

    sortContacts([], "DESC") ➞ []

    sortContacts(null, "DESC") ➞ []

    sortContacts(undefined, "DESC") ➞ []


### Notes ###
*   An array with a single name should be trivially returned.
*   An empty array, or an input of `null`or `undefined`should return an empty array.