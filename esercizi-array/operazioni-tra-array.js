/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo
  compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var numeri1 = new Array (5);
var numeri2 = new Array (5);

//riempi con numeri casuali gli array
for (var i = 0; i < numeri1.length; i++) {
  numeri1[i]=Math.floor(Math.random()*10);
}

for (var i = 0; i < numeri2.length; i++) {
  numeri2[i]=Math.floor(Math.random()*10);
}

console.log(numeri1);
console.log(numeri2);

var operazione = '*';
var risultati = [];

switch (operazione) {
  case '+':
    for (var i = 0; i < numeri1.length; i++) {
      risultati.push(numeri1[i]+numeri2[i]);
    }
    break;
  case '-':
  for (var i = 0; i < numeri1.length; i++) {
    risultati.push(numeri1[i]-numeri2[i]);
  }
    break;
  case '*':
  for (var i = 0; i < numeri1.length; i++) {
    risultati.push(numeri1[i]*numeri2[i]);
  }
    break;
  case '/':
  for (var i = 0; i < numeri1.length; i++) {
    risultati.push(numeri1[i]/numeri2[i]);
  }
    break;
  default:
    console.log('non hai inserito un operatore');
}

console.log(risultati);
