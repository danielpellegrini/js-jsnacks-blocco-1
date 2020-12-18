// 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var number;
var sum = 0;

for (var i = 0; i < 5; i++) {
  number = prompt('Type a number');
  sum += parseInt(number);
}
console.log('your sum is: ' + sum)
