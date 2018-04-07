/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var time = 172917225171;

var ore = Math.floor(time/60/60);
var minutes = Math.floor(time/60)-(ore*60);
var seconds = time-(ore*60*60)-(minutes*60);


console.log(`${time} secondi sonno ${ore} ore, ${minutes} minuti e ${seconds} secondi.`);
