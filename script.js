//Select all buttons
const buttons = document.querySelectorAll("button")

//For each button click event
buttons.forEach(button => {
    button.addEventListener("click", function playRound(){
        
        })
    }
)

//function for the computer choice
function getComputerChoice(x) {

    var randValue = Math.floor(Math.random() * 3);
    var choise = ["Rock","Paper","Scissors"];
    return choise[randValue];
}
    


//Functon to check who win or lose round
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
};

