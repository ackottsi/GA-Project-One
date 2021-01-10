console.log("javaScript Link Works!");

//Need to declare two players
let playerOne=true;
let playerTwo=false;

let clickCounter=0;
let match=true;
let playerOnePoints=0;


//test array:
const testingArray=["red","blue","green","yellow","red"];
const automatedArray=[];
//Function to compare user array and test array
//IF Array value is NOT equal, STOPPING CONDITION. else if ARRAY values 
//are equal AND test , continue 
function compareResults(){

    console.log("test Arr: "+testingArray);
    console.log("player choice Arr "+playerChoice);
 const a=testingArray.toString();
 const b=playerChoice.toString();   
 console.log(a);
 console.log(b);

 //if Player successfully followed
 //sequence array is equal to array entered by player
if(a===b){
    console.log("the arrays matches")

    //resets player move counter and empty user array
    clickCounter=0;
    playerChoice.length=0;
    playerOnePoints++;  
    console.log("points "+playerOnePoints);
}
//if player 
else{
    console.log("the arrays do not match")

    clickCounter=0;
    playerChoice.length=0;
    playerOnePoints==playerOnePoints;
    console.log(playerOnePoints);

    //Need to add action to take when array does not match
}
}

//Create way for player(s) to make choices (Listener event and place to store players sequence)

const playerChoice=[];
const gameButtons=document.querySelectorAll(".button");
for (let i=0; i<gameButtons.length; i++){
    console.log(gameButtons[i]);
    gameButtons[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(gameButtons[i]);
        console.log(gameButtons[i].id)
        flashButton(gameButtons[i]);
    

        //below code will all player to enter choices until the number
        //of choices is equal to the number of choices in the test array
        if(playerOne===true && clickCounter<testingArray.length){
        playerChoice.push(gameButtons[i].id);
        clickCounter++;
       
        console.log("players choice array: "+playerChoice);
     
        //create function that will compare array values to invoke here;


    }

if(playerChoice.length==testingArray.length)
compareResults();
    
    })
}

 //Create any array to store Player's choices
 //Create a RANDOM sequence generator that generates sequence of increasing LENGTH
 //



 //working on changing display background of buttons
/*
 const background=document.querySelector("body");
 background.addEventListener("click",function(){
 background.style.backgroundColor="purple";
 const timer=setTimeout(function(){
 background.style.backgroundColor="grey";    
 console.log("timer ")},500);
 
})
*/

//Create function to use for flashing color of button box
//when it is clicked

function flashButton(button){
button.style.backgroundColor=button.id;
 const timer=setTimeout(function(){
 button.style.backgroundColor="black";    
 console.log("timer ")},300);
}
 


//Random array generator for automated color sequences
//used stackover flow as guidance on random selection
//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

for(let i=0; i<5; i++){
const colorChoice=["red","blue","green","yellow"];
const randomColorIndex=Math.floor(Math.random()*colorChoice.length);
console.log("random color "+colorChoice[randomColorIndex]);
automatedArray.push(colorChoice[randomColorIndex]);
console.log(automatedArray)
}
 
//creating function for automated sequence and showing it on grid
//first iteration will use testArray

function showSequence(arrSequence){
    for (let i=0; i<arrSequence.length; i++){
        const sequenceSpeed=setTimeout(function(){
        console.log(arrSequence);
        if(arrSequence[i].toString()=="red"){
            gameButtons[0].style.backgroundColor="red";
            const timer2=setTimeout(function(){
                gameButtons[0].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }

        if(arrSequence[i].toString()=="blue"){
            gameButtons[1].style.backgroundColor="blue";
            const timer2=setTimeout(function(){
                gameButtons[1].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }   

        if(arrSequence[i].toString()=="green"){
            gameButtons[2].style.backgroundColor="green";
            const timer2=setTimeout(function(){
                gameButtons[2].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }

        if(arrSequence[i].toString()=="yellow"){
            gameButtons[3].style.backgroundColor="yellow";
            const timer2=setTimeout(function(){
                gameButtons[3].style.backgroundColor="black";    
                    console.log("timer2 ")},300);
        }  
    //should control time between displaying sequence flash     
    },1000);
}

}

    const generator=document.querySelector("#sequence_button");
    generator.addEventListener("click",function(){
        showSequence(testingArray);     
    })
