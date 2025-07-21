let gameOptions=["rock","paper","scissor"];
let computerWinCount=0;
let playerWinCount=0;
function computerChoice(){
     let computerChoiceValue=Math.floor(Math.random()*2)+1;
    return gameOptions[computerChoiceValue];
}

let computerAnswer=computerChoice();
console.log(`${computerAnswer} is computer`);

let computerAnswerIndex=gameOptions.indexOf(computerAnswer);




function playerChoice(){
     let playerChoiceValue=Math.floor(Math.random()*2)+1;//prompt("1.Rock\n2.Paper\n3.Scissor");
    switch(playerChoiceValue){
        case 0:
            return gameOptions[playerChoiceValue];
            break;
        case 1:
             return gameOptions[playerChoiceValue];
            break;
        case 2:
             return gameOptions[playerChoiceValue];
            break;
        default:
            console.log("invalid option");
            
            break;            
    }

}
let playerAnswer=playerChoice();
console.log(`${playerAnswer} is player`);

let playerAnswerIndex=gameOptions.indexOf(playerAnswer);



function winner(computerAnswerIndex,playerAnswerIndex){
      if(computerAnswerIndex > playerAnswerIndex){
        console.log("computer wins");
        computerWinCount++;
      }else if(computerAnswerIndex < playerAnswerIndex){
        console.log("player wins");
        playerWinCount++;
      }else{
        console.log("tie");
      }
}

function startbtn(){
    computerChoice();
    playerChoice();
    winner(computerAnswerIndex,playerAnswerIndex);
}



let continuePlay=false;

do {
    startbtn();
 let playAns='n';//prompt("continue[y/n]");
 if(playAns=='y'){
    continuePlay=true;
 }else{
    continuePlay=false;
 }
} while (continuePlay);

console.log(`computer wins : ${computerWinCount}`);
console.log(`player wins : ${playerWinCount}`);

