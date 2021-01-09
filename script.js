console.log("javaScript Link Works!");

//Need to declare two players
let playerOne=true;
let playerTwo=false;
let clickCounter=0;
let match=true;
//Create way for players to make choices (Listener event and place to store players sequence)

//test array:
const testingArray=["red","blue","green","yellow","red"];

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
if(a===b){
    console.log("the arrays matches")
    
}
else{
    console.log("the arrays do not match")
    
}
}



const playerChoice=[];
const gameButtons=document.querySelectorAll(".button");
for (let i=0; i<gameButtons.length; i++){
    console.log(gameButtons[i]);
    gameButtons[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(gameButtons[i]);
        console.log(gameButtons[i].id)
    

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