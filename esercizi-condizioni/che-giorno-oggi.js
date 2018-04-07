/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/

var input = Math.round(Math.random()*8);

console.log(`valore é ${input}`);

switch (input) {
  case 1:
    console.log('oggi è Lunedì');
    break;
  case 2:
    console.log('oggi è Martedì');
    break;
  case 3:
    console.log('oggi è mercoledì');
  case 4:
    console.log('oggi è giovedì');
    break;
  case 5:
    console.log('oggi è venerdì');
    break;
  case 6:
    console.log('oggi è sabato');
    break;
  case 7:
    console.log('oggi è domenica');
  default:
    console.log('valore non valido');
}
