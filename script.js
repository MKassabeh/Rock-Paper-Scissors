console.log("Hello world!");




function getComputerChoice(x) {

    var randValue = Math.floor(Math.random() * 3);
    var choise = ["Rock","Paper","Scissors"];
    return choise[randValue];
}

var computerSelection = getComputerChoice().toLowerCase();

console.log(computerSelection);

var userSelection =  prompt("Rock , Paper , Scissors").toLowerCase()
console.log(userSelection);



function singleRound(x,y){
    if(x === y){
        console.log("It's a tie");
    }
    else if(x === "rock"){
        if(y === "scissors"){
            console.log("You win");
        }
        else{
            console.log("You lose");
        }
    }
    else if(x === "paper"){
        if(y === "rock"){
            console.log("You Win");
        }
        else{
            console.log("You Lose");
        }
    }
    else if(x === "scissors"){
        if(y === "paper"){
            console.log("You Win");
        }
        else{
            console.log("You Win");
        }
    }
}


singleRound(userSelection,computerSelection);