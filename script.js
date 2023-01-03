console.log("Hello world!");




function getComputerChoice(x) {

    var randValue = Math.floor(Math.random() * 3);
    var choise = ["Rock","Paper","Scissors"];
    return choise[randValue];
}

var computerSelection = getComputerChoice();

var userSelection = prompt("What do you play : Rock , Paper , Scissors")

console.log(computerSelection);