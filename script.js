console.log("Hello world!");





for (let index = 0; index < 5; index++) {

    
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
    
    function getComputerChoice(x) {
    
        var randValue = Math.floor(Math.random() * 3);
        var choise = ["Rock","Paper","Scissors"];
        return choise[randValue];
    }
    
    var computerSelection = getComputerChoice().toLowerCase();
    
    var userSelection =  prompt("Rock , Paper , Scissors").toLowerCase();
    
    console.log("computer choose : "+computerSelection)

    console.log("user choose : "+userSelection)
    
    singleRound(userSelection,computerSelection);
    

    
}