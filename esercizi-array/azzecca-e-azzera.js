/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/


var numeri = new Array(100);

for (var i = 0; i < numeri.length; i++) {
  numeri[i] =  Math.floor(Math.random() * 50)
}

console.log(numeri);

var utente = [5,2,6,8];

for (var i = 0; i < utente.length; i++) {

  for (var l = 0; l < numeri.length; l++) {
    if (utente[i]==numeri[l]) {
      numeri[l] = 0;
    } else if (Number.isInteger(numeri[l]/utente[i])) {
      numeri[l] = 0;
    }
    
  }
  
}

console.log(numeri);
