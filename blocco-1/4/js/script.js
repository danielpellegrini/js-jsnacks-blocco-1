// 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Users list
var arrayNames = ['Giovanni', 'Guido', 'Daniele', 'Ottavio', 'Michele', 'Roberta', 'Claudia', 'Sara'];

//  User guest input
var userName = prompt('What\'s your name?');

// loop cycle for unfilled field
while (userName.length <= 0) {
  var userName = prompt('What\'s your name?');
}

// Capitalize
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();


if (arrayNames.indexOf(userName) === -1) {
  alert('Access denied');
} else {
  alert('Access granted. Welcome ' + userName + '!');
  console.log('Guest user connected: ' + userName);
}

// In case of Access Denied repeat the action
while (arrayNames.indexOf(userName) === -1) {
  alert('Please, try again');

  var userName = prompt('What\'s your name?');

  while (userName.length <= 0) {
    var userName = prompt('What\'s your name?');
  }

  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

  if (arrayNames.indexOf(userName) === -1) {
    alert('Access denied');
  } else {
    alert('Access granted. Welcome ' + userName + '!');
  }
}
