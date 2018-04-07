/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var catsnumbers = 44;
var catsinarow = 6;

var row = Math.ceil(catsnumbers/catsinarow);
var lostcats = row*catsinarow-catsnumbers;

console.log("le colonne di gatti sono" + row);
console.log("mentre i gatti non in fila sono" + lostcats);
console.log(`le colonne dei gatti sono ${row} mentre i posti liberi sono ${lostcats}`);
