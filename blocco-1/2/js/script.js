// 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var firstWord = prompt('Type the first word');

while (firstWord.length <= 0) {
  firstWord = prompt('Type the first word');
}

var secondWord = prompt('Type the second word');

  if(firstWord.length > secondWord.length) {
    alert('The longest word is: ' + firstWord);
  } else if (firstWord.length < secondWord.length) {
    alert('The longest word is: ' + secondWord);
  } else {
    alert('They are the same length.');
  }
