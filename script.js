//Select all buttons
const buttons = document.querySelectorAll("button");

const result = document.querySelector("#result");

const showResult = document.createElement("div");

const resultFight = document.createElement("div");;

//For each button click event
buttons.forEach(button => {
    button.addEventListener("click", function playRound(){
        //function for the computer choice
        function getComputerChoice(x) {

            var randValue = Math.floor(Math.random() * 3);
            var choise = ["Rock","Paper","Scissors"];
            return choise[randValue];
        }
        var computerChoice = getComputerChoice().toLowerCase();
        if(button.getAttribute("id") === "rock" ){
            resultFight.innerHTML ="<span>User choicie : Rock Computer Choice : "+computerChoice+"</span>"
            if(computerChoice==="paper"){
                showResult.innerHTML ="<span>You lose</span>"
            }else if(computerChoice==="scissors"){
                showResult.innerHTML ="<span>You win</span>"
            }else{
                showResult.innerHTML ="<span>It's a tie</span>"

            }

        }else if(button.getAttribute("id") === "paper"){
            resultFight.innerHTML ="<span>User choicie : Paper Computer Choice : "+computerChoice+"</span>"
            if(computerChoice==="scissors"){
                showResult.innerHTML ="<span>You lose</span>"
            }else if(computerChoice==="rock"){
                showResult.innerHTML ="<span>You win</span>"
            }else{
                showResult.innerHTML ="<span>It's a tie</span>"

            }

        }else{
            resultFight.innerHTML ="<span>User choicie : Scissors Computer Choice : "+computerChoice+"</span>"
            if(computerChoice==="rock"){
                showResult.innerHTML ="<span>You lose</span>"
            }else if(computerChoice==="paper"){
                showResult.innerHTML ="<span>You win</span>"
            }else{
                showResult.innerHTML ="<span>It's a tie</span>"

            }

        }
        result.appendChild(resultFight);
        result.appendChild(showResult);
        
        })
        
    }
)

