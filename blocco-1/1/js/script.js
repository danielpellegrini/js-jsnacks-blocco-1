// 1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var firstNumber = prompt('choose the first number');
var secondNumber = prompt('choose the second number');

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if (firstNumber > secondNumber) {
  alert(firstNumber)
} else if (firstNumber < secondNumber) {
  alert(secondNumber)
}
