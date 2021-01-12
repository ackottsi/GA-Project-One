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

*When game is over, would like for gameboard to no longer respond to clicks*
*add a reset button to start the game over*
*speed up sequence timing as the rounds incease*
*add feature for two players*






