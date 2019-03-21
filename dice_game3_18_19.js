"use strict"

let randomDice1; 

function playerTurn(){
	let myArray = [];
	for (let i=4; i<=9; i++){
		myArray.push(rollDie(i));
		
	}
	let arraySum = calcRoll(myArray);
	
	return arraySum;
}
function calcRoll(array){
	let sum = 0;
	for(let i = 0; i < 6; i++){
		sum += array[i];
	}
	return sum;
}
function fiveDiceRolls(number){
	let finalSum = 0;
	for(let i = 0; i < 5; i++){
		finalSum += playerTurn();
	}
	console.log("Player " + number + " score = " + finalSum); 

	return finalSum;  
}
function rollDie(n){
	let result = Math.ceil(Math.random()* n);
	return result;
}




function runGame(){
	console.log("Welcome to my game! This is a 2 player game. Each player will roll a total of 5 times. 6 dice, " + 
		"ranging from 4 faces to 9 faces, will roll each time." +
		" The total of all rolls will result in a players score."+" Highest score wins. " +
		" Hit refresh to start and complete new game.");  
	
	let player1Rolls = fiveDiceRolls(1);

	let player2Rolls = fiveDiceRolls(2);

	if (player1Rolls > player2Rolls){
		console.log("Player 1 wins!");
	 }
		else if (player2Rolls > player1Rolls)
	{	console.log("Player 2 wins!")
	}
	
	 
	else if (player1Rolls = player2Rolls){
		console.log("It is a tie!");
	}

	}
	
runGame();









