// blocco-6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var number = parseInt(prompt('Type a number'));

if (number > 10) {
  alert('too much');
} else {
  for (var i = 1; i <= number ; i++) {
    console.log(Math.pow(i, 3));
  }
}
