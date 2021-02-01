const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');
let resultPlayer = 0, resultComputer = 0;

/**
 * Button inputs
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let  computerMove, playerMove, randomNumber;

  /**
   * Calculating Moves
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId === 1) {
      return 'kamień';
    }
    else if (argMoveId === 2) {
      return 'papier';
    }
    else if (argMoveId === 3) {
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
    if (argPlayerMove === 'papier' && argComputerMove === 'kamień') {
      printMessage('Wygrywasz!');
      resultPlayer++;
    } 
    else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') {
      printMessage('Wygrywasz!');
      resultPlayer++;
    } 
    else if (argPlayerMove === 'nożyce' && argComputerMove === 'papier') {
      printMessage('Wygrywasz!');
      resultPlayer++;
    } 
    else if (argPlayerMove === argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      resultComputer++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  document.getElementById("results").innerHTML = "Gracz: " + resultPlayer + " - " + resultComputer + " :Komputer";

}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


