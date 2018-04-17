/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/


var numeri = [5,10,8,41,87,2,9,62,44];
var ordinati = [];


for (var l = 0; l < numeri.length; l++) {


  for (var i = 0; i < ordinati.length; i++) {
    if (numeri[l] > ordinati[i] && numeri[l] < ordinati [i+1]) {
      // inserisci numeri[l] dopo ordinati [i]
    } else if (numeri[l] < ordinati[i] && numeri[l] > ordinati [i-1]) {
      // inserisci numeri[l] prima di ordinati [i]
    }
  }


}


console.log(ordinati);
