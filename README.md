    # GA-Project-One

## Simon Says Game

Simon Says is a game where a player follows a sequence.  The sequence grows in length after successful completion of a round by the player.

## Preview 

This is a Simon Says game.  The goal is for a player to follow sequences of increasing length.  Once a player has an incorrect move or entry, the game ends.

## Technologies Used

javaScript, CSS, and HTML used.  DOM manipulation is used freqently.



## Approach Taken

Four squares (divs) created and had event listeners and styling added.  Created a randomly generated sequence using the Math Random and Math floor functions.  random sequence was stored in an array. player moves were tracked and stored in a unique array.  The array populated with the players move is compared against the random sequence array.  if they match, the game goes to the next round and another color is added to the sequence.  if the user fails to match the random sequence, the game will show a "GAME OVER" message. 



## Installation Instructions

No Installation Instructions


## Features List and Additionally Desired Features


* COMPLETED FEATURES
    * Reset button to reset game to original state
    * Automated sequence that displays on game board
    * Tracks rounds and points
    * Buttons flash when clicked
    * Created way for user to input moves and stored them to an array
    * Logic conditions to end game once the player has an incorrect entry
    * Game over message displays with points total
    * Added blinking feature to "GAME OVER" when incorrect move is entered


* FUTURE DESIRED FEATURES and CLEAN UP
    * Speed up sequence timing as the rounds incease
    * Add feature for two players
    * Add feature for sound on click and when automated sequence runs
    * Add player name at start.  Use player name to store score
    * Add hover feature to control bars at the bottom of game page
    * Modify code to support different screen sizes
    * Clean up code to elimiate redundant logic comparisons
        *Array comparison logic 


## SCREEN SHOTS AND LINKS

* Napkin Sketch of Starting Ideas

![Napkin Sketch](https://user-images.githubusercontent.com/74615798/104466882-51676100-557b-11eb-896c-a671752e9698.png)

* Screen Shot of Game

![image of game](https://user-images.githubusercontent.com/74615798/104464104-2fb8aa80-5578-11eb-8bfb-a1df3ddc5411.png)

* Link to Game Site

[Simon Says Game Link](https://ackottsi.github.io/)






