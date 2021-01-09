console.log("javaScript Link Works!");

//Need to declare two players
let playerOne=true;
let playerTwo=false;
//Create way for players to make choices (Listener event and place to store players sequence)

const gameButtons=document.querySelectorAll(".button");
for (let i=0; i<gameButtons.length; i++){
    console.log(gameButtons[i]);
    gameButtons[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(gameButtons[i]);
    })
}

 //Create any array to store Player's choices
 //Create a RANDOM sequence generator that generates sequence of increasing LENGTH
 //