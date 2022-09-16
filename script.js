// Global variables
var userInput = "S"
var computerInput = "P"
var userPlayAgain = true;

console.log(userInput);


alert("Do you want to play a game?");


// User input of R, P, or S (prompt box to take inputs)
// Prompt > promput input > userInput = prompt
 function findUserInput() {
    userInput= prompt("Choose between R, P, S");
    console.log(userInput);
 };
 findUserInput();       // Remember to call the function!


 function playAgain() {
    userPlayAgain = confirm("Would you like to play again?");
 }


// Computer randomizer 
var min = 0;
var max = 2;
var random = Math.floor(Math.random () * (max - min +1) + min);
console.log(random);

if (random === 0) {
    computerInput = "R";
} else if (random === 1) {
    computerInput = "P";    
} else {
    computerInput = "S";
};
console.log(computerInput);


// Potential outcomes
// If userInput is R, computerInput is P or S
// If userInput is P, computerInput is R or S
// If userInput is S, computerInput is R or P
// computerInput is randomized and accounted for in the else/if statements
if (userInput === computerInput) {
    console.log("This game is a tie!")
} else if (userInput === "R" && computerInput === "P") {
    console.log("Computer wins!")
} else if (userInput === "R" && computerInput === "S") {
    console.log("User wins!")
} else if (userInput === "P" && computerInput === "R") {
    console.log("User wins!")
} else if (userInput === "P" && computerInput === "S") {
    console.log("Computer wins!")
} else if (userInput === "S" && computerInput === "R") {
    console.log("Computer wins!")
} else if (userInput === "S" && computerInput === "P"){
    console.log("User wins!")
}


// Option to play again
while (userPlayAgain === true) {
    playAgain();
    findUserInput();
}