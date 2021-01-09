console.log("javaScript Link Works!");

//Need to declare two players
let playerOne=true;
let playerTwo=false;
let clickCounter=0;
//Create way for players to make choices (Listener event and place to store players sequence)

//test array:
const testingArray=["red","blue","green"];



const playerChoice=[];
const gameButtons=document.querySelectorAll(".button");
for (let i=0; i<gameButtons.length; i++){
    console.log(gameButtons[i]);
    gameButtons[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(gameButtons[i]);
        console.log(gameButtons[i].id)
    
        if(playerOne===true && clickCounter<testingArray.length){
        playerChoice.push(gameButtons[i].id)
        clickCounter++;
        console.log("players choice array: "+playerChoice)}

        
    
    })
}

 //Create any array to store Player's choices
 //Create a RANDOM sequence generator that generates sequence of increasing LENGTH
 //