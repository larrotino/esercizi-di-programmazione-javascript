/*
  Il conta cifre
  Scrivi un programma che calcoli quante cifre sono contenute in un numero inserito in input (massimo 9999).
  http://www.imparareaprogrammare.it
*/
var numero = Math.round(Math.random()*100);

var utente1 = 50;
var utente2 = 12;

console.log(`utente1: ${utente1}. utente2: ${utente2}. numerone: ${numero}`);

if (utente1 == numero) {
  console.log('utente 1 ha azzeccato il numero');
} else if (utente2 == numero) {
    console.log('utente 2 ha azzeccato il numero');
} else if (Math.abs(numero-utente1) > Math.abs(numero-utente2)) {
    console.log('utente 1 si è avvicinato di più');
} else {
    console.log('utente 2 si è avvicinato di più');
}
