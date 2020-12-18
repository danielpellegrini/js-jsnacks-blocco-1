// 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var sum = 0;
var n = 0;

do {
  var number = prompt('Type a number');
  sum += parseInt(number);
  n++;

} while (n < 5);

console.log('your sum is: ' + sum)
