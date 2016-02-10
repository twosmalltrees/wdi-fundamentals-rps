
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

'use strict';


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'. \n");
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
    var playerMove = getInput().toLowerCase();

    while (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors" ) {
        playerMove = prompt("Sorry, but '"+ playerMove + "' isn\'t a move. Please enter either 'scissors', 'paper' or 'rock'.").toLowerCase();
    }
    
    return move || playerMove;
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if (playerMove == "rock") {
        if (computerMove == "rock"){
            winner = "tie"
        } else if (computerMove == "paper") {
            winner = "computer"
        } else if (computerMove == "scissors") {
            winner = "player"
        };
    } else if (playerMove == "paper") {
        if (computerMove == "rock"){
            winner = "player"
        } else if (computerMove == "paper") {
            winner = "tie"
        } else if (computerMove == "scissors") {
            winner = "computer"
        };
    } else if (playerMove == "scissors") {
        if (computerMove == "rock"){
            winner = "computer"
        } else if (computerMove == "paper") {
            winner = "player"
        } else if (computerMove == "scissors") {
            winner = "tie"
        };
    };

    return winner;
}

function playToFive() {

    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;

    logAlert("Let's play Rock, Paper, Scissors. First to 5 wins");

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        if (winner=="player") {
            playerWins ++;
        } else if (winner=="computer") {
            computerWins ++;
        }

        logAlert(getRoundSummary(playerMove, computerMove, winner, playerWins, computerWins));
    }

    // LOG THE OVERALL VICTOR

    logAlert(getGameSummary(playerWins, computerWins));

    return [playerWins, computerWins];
}

function playTo(x) {

    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;

    if (x === undefined) {
       var rounds = prompt("Rock Paper Scissors: First to how many?");
       while (isNaN(Number(rounds)) === true || rounds ==="") {
         rounds = prompt("Errr...that wasn't a number. Please enter a number. \n \nFirst to how many?");
       }
        x = rounds;
    }

    logAlert("Let's play Rock, Paper, Scissors. First to " + x + " wins.");

    while (playerWins < x && computerWins < x) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        if (winner=="player") {
            playerWins ++;
        } else if (winner=="computer") {
            computerWins ++;
        }

        logAlert(getRoundSummary(playerMove, computerMove, winner, playerWins, computerWins));
    }

    // Log the overall victor

    logAlert(getGameSummary(playerWins, computerWins));

    return [playerWins, computerWins];
}

// ADDITIONAL FUNCTIONS

function getRoundSummary(playerMove, computerMove, winner, playerWins, computerWins) {

    //  ** BUILDS THE ROUND SUMMARY ** //

    if (winner == "tie") {
        return "The human player chose " + playerMove + ", as did the computer. How very dull... \n \nThe score remains player: " + playerWins + " to computer: " + computerWins + ". \n";
    } else {
        return "The human player chose " + playerMove + " while the evil computer chose " + computerMove 
        + ". After a battle of epic proportions, the " + winner + " won. \n \nThe current score is player: " + playerWins + " to computer: " + computerWins + ". \n";
    }
}

function getGameSummary(playerWins, computerWins) {

    // ** BUILDS THE FULL GAME SUMMARY ** //

    if (playerWins > computerWins) {
        return "AND THE VICTOR IS...THE HUMAN!!! " + "With a winning score of " + playerWins + " to " + computerWins + ". \n";
    } else {
        return "THE COMPUTER WON, " + "with a devastating score of " + computerWins + " to " + playerWins + ". All hail our new machine overlords. \n";
    }
}

function logAlert(text) {

    // ** LOGS PROVIDED TEXT TO CONSOLE, AND ALSO DISPLAYS IT IN AN ALERT BOX SO THE GAME CAN BE PLAYED IN BROWSER ** //

    console.log(text);
    alert(text);
}

