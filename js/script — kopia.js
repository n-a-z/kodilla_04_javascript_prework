// Robot move
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else if (randomNumber == "3") {
  computerMove = "nożyce";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);

// Player move
var playerMove, playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
} else {
  printMessage(
    playerInput + " nie jest dozwoloną wartością! Zmieniono na 1 (kamień)"
  );
  playerMove = "kamień";
}
printMessage("Twój ruch: " + playerMove);


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Calculating Moves
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Calculating results
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);