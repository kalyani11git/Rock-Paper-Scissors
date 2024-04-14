let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");

let user = document.querySelector("#you-score");
let comp = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");



const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    let randId = Math.floor(Math.random()*3);
    return option[randId];
}

const showDraw = ()=>{
  
   msg.innerText = "Game is draw !! Play again";
   msg.style.backgroundColor = "#081b31";
}


let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        // console.log(`You Won !! Your ${userChoice} beats ${compChoice}`);
        userScore++;
        user.innerText = userScore;
        msg.innerText=`You Won !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log(`You lose !! ${compChoice} beats your ${userChoice}`);
        compScore++; 
        comp.innerText = compScore;
        msg.innerText=`You lose !! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice)=>{

    console.log("user choice",userChoice);
    let compChoice = genCompChoice();
    console.log("comp choice ",compChoice);
     
    
    if(userChoice===compChoice){
        showDraw();
    }
    else{
        let userWin = true;
        if (userChoice==="paper") {
            userWin = compChoice === "rock"? true : false;
        } else if(userChoice==="rock"){
            userWin = compChoice === "scissors"? true : false;
        }
        else{
            userWin = compChoice === "paper"? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    } 

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });

});