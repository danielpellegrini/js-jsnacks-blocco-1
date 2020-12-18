// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var array = [];
console.log(array);
var userNumber;


for (var i = 0; i < 6; i++) {
  userNumber = parseInt(prompt('Type a number'));
  if (userNumber % 2 !== 0 ) {
    array.push(userNumber);
  } else {
    console.log(userNumber);
  }
}
