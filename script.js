console.log("javaScript Link Works!");

//Need to declare two players
let playerOne=true;
let playerTwo=false;

//Declaring round to be used as rounds counter
let roundCount=1;

//using click counter to track number of player moves
let clickCounter=0;
// let match=true;

//variables to track player point totals
let playerOnePoints=0;


console.log(document.querySelectorAll(".SCOREBOARD"));






//test array:
const testingArray=["red","blue","green","yellow","red"];
const automatedArray=[];


//Create way for player(s) to make choices (Listener event and place to store players sequence)

const playerChoice=[];
const gameButtons=document.querySelectorAll(".button");
for (let i=0; i<gameButtons.length; i++){
    console.log(gameButtons[i]);
    gameButtons[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(gameButtons[i]);
        console.log("color clicked is "+gameButtons[i].id)
        flashButton(gameButtons[i]);
    

        //below code will allow player to enter choices until the number
        //of choices is equal to the number of choices in the test array
        if(playerOne===true && clickCounter<automatedArray.length){
        playerChoice.push(gameButtons[i].id);
        clickCounter++;
        compareUniqueArrPostion(playerChoice,automatedArray);
       
        console.log("players choice array: "+playerChoice);
     
        //create function that will compare array values to invoke here;


    }



//IF THE NUMBER OF PLAYER MOVES IS EQUAL TO THE AUTOMATIC SEQUENCE LENGTH
//CHECK TO SEE IF TOTAL ARRAY MATCHES

if(playerChoice.length==automatedArray.length)
compareResults();

    
    })
}

 //Create any array to store Player's choices
 //Create a RANDOM sequence generator that generates sequence of increasing LENGTH
 //




//FUNCTION BELOW IS USED FOR FLASHING COLOR OF BUTTON
//BOX WHEN IT IS CLICKED BY THE PLAYER

function flashButton(button){
button.style.backgroundColor=button.id;
 const timer=setTimeout(function(){
 button.style.backgroundColor="black";    
 console.log("timer ")},300);
}
 

//RANDOM SEQUENCE GENERATOR FUNCTION
//Random array generator for automated color sequences
//used stackover flow as guidance on random selection
//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

function generateNewSequence(arrLength){
console.log("this is the array length being passed into generate new sequence "+arrLength);
const colorChoice=["red","blue","green","yellow"];

for(let i=0; i<arrLength; i++){
    console.log("iterator of loop that pushes colors to automated sequence: "+i);
const randomColorIndex=Math.floor(Math.random()*colorChoice.length);
console.log("random color "+colorChoice[randomColorIndex]);
automatedArray.push(colorChoice[randomColorIndex]);
}

console.log("result of newly created sequence "+automatedArray);
playerChoice.length=0;
clickCounter=0;
}
 
//CODE BELOW IS FOR SHOWING SEQUENCE ON THE GAME BOARD.  
//SEQUENCING DELAY OF AUTOMATED SEQUENCES IS INCLUDED BY USING 
//SET TIMEOUT METHOD

function showSequence(arrSequence){
    for (let i=0; i<arrSequence.length; i++){
        setTimeout(function(){console.log("delay test iteration "+i)
        
        console.log(arrSequence);
        
        //if automated sequence value is red, flash red
        if(arrSequence[i].toString()=="red"){
            gameButtons[0].style.backgroundColor="red";
            const timer2=setTimeout(function(){
                gameButtons[0].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }
        //if automated sequence value is blue, flash blue
        else if(arrSequence[i].toString()=="blue"){
            gameButtons[1].style.backgroundColor="blue";
            const timer2=setTimeout(function(){
                gameButtons[1].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }   

        //if automated sequence value is green, flash green
        else if(arrSequence[i].toString()=="green"){
            gameButtons[2].style.backgroundColor="green";
            const timer2=setTimeout(function(){
                gameButtons[2].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }

        //if automated sequence value is yellow, flash yellow
        else if(arrSequence[i].toString()=="yellow"){
            gameButtons[3].style.backgroundColor="yellow";
            const timer2=setTimeout(function(){
                gameButtons[3].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }  
        
    //CONTROLS TIMING OF AUTOMATED SEQUENCE TRANSITION       
    },600*i);

}
}

//CODE USED TO SHOW AUTOMATED SEQUENCE USING SEQUENCE BUTTON
    const generator=document.querySelector("#sequence_button");
    generator.addEventListener("click",function(){
        console.log("roundCount"+roundCount); 
        showSequence(automatedArray);
        playerChoice.length=0;
    })
//END OF CODE BLOCK FOR SEQUENCING DELAY



//BELOW FUNCTION COMPARES EACH MOVE OF THE PLAYERS CHOICE ARRAY
//TO THE CORRESPONDING INDEX OF THE AUTOMATED ARRAY

    function compareUniqueArrPostion(Arr1,testArr){
        for (let i=0; i<Arr1.length; i++){
            // console.log("Arr1 " +Arr1);
            // console.log("testArr "+testArr);

        if (Arr1[i].toString()!==testArr[i].toString()){
            // console.log("user choice "+i+"DOES NOT equal automated choice "+i);
            document.querySelector("#ROUND").style.fontSize="50px";
            document.querySelector("#SCORE").style.fontSize="50px";
            document.querySelector("#ROUND").textContent="GAME OVER!";
            document.querySelector("#SCORE").textContent=`FINAL SCORE:${playerOnePoints}`;
        }
        else{
            // console.log("user choice "+i+"DOES NOT equal automated choice "+i);
          

        }
        }
    }

    //Function to compare user array and automated sequence
//IF Array value is NOT equal, STOPPING CONDITION. else if ARRAY values 
//are equal AND test , continue 
function compareResults(){
    console.log("automated sequence: "+automatedArray);
    console.log("player choice Arr "+playerChoice);
 const a=automatedArray.toString();
 const b=playerChoice.toString();   
 console.log("automated test array compare results function"+a);
 console.log("players choice Arr compare results function"+b);

 //if Player successfully followed
 //sequence array is equal to array entered by player
if(a==b){
    console.log("the arrays matches")

    //resets player move counter and empty user array
    clickCounter=0;
    
    playerChoice.length=0;
    // automatedArray.length=0;
    playerOnePoints++;  
    roundCount++;
    console.log("points "+playerOnePoints);
    // console.log("testing console logging");


    
    generateNewSequence(1);
    
    //set timeout creates delay between sequence showing for next round
    setTimeout(function(){showSequence(automatedArray);},1500);

    document.querySelector("#ROUND").textContent=`ROUND ${roundCount}`;
    document.querySelector("#SCORE").textContent=`SCORE: ${playerOnePoints}`;
}
//if player 
else{
    console.log("the arrays do not match");

    clickCounter=0;
    playerChoice.length=0;
    playerOnePoints==playerOnePoints;
    console.log(playerOnePoints);

    //Need to add action to take when array does not match
}
}


//GENERATE INITIAL SEQUENCE AND SHOW SEQUENCE TO START GAME:
generateNewSequence(roundCount);
showSequence(automatedArray);