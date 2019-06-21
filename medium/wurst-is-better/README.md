Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.


### Examples of German Wursts ###
*   Bratwurst
*   Kochwurst
*   Leberwurst
*   Mettwurst
*   Rostbratwurst


### List of sausages that need to turn into "Wurst" ###
*   Kielbasa
*   Chorizo
*   Moronga
*   Salami
*   Sausage
*   Andouille
*   Naem
*   Merguez
*   Gurka
*   Snorkers
*   Pepperoni


### Rules ###
*   Replace every mention of any sausage from the above list, with the word "Wurst"
*   Do not replace any German sausage with the word "Wurst"
*   The word "Wurst" must be titlecase
*   Return the Wurst-ified string


### Examples ###
    wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"

    wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"


### Notes ###
All test cases contain valid strings. All German sausage names in test cases contain the word "wurst".