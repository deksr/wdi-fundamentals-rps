////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return ((move==="rock"||"paper"||"scissors") && 
    randomPlay());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return ((move==="rock"||"paper"||"scissors") && 
    randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove==="rock"&& computerMove==="scissors") 
    ||(playerMove==="scissors"&& computerMove==="paper")
    || (playerMove==="paper"&& computerMove==="rock"))
{winner= "player";}

else if (playerMove===computerMove)
{winner= "tie";}

 else {winner= "computer";}

return winner;
    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var wins = (getWinner(playerMove, computerMove));

var round =0;

while (round<5) {
    if (wins == "player") {
        playerWins = playerWins + 1;
         console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log("winner is:" + wins);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
          
        }
        
      else if (wins == 'computer'){
        computerWins = computerWins + 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log("winner is:" + wins);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            
        } 

        
        else { console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log("winner is:" + wins);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
        
       


    return [playerWins, computerWins];}
    
     round=round+1;
}

