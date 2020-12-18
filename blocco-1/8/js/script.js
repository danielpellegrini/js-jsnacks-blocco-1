// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var number = prompt('Type a 4 digit number');
var sum = 0;

if (number.length !== 4) {
  alert('try again');
} else {
  for (var i = 0; i < 4 ; i++) {
    sum += parseInt(number[i]);
  }
  console.log(sum);
}
