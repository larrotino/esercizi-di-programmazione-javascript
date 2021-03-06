/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi
  inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5
  numeri a suo piacimento e verifica quanti sono presenti nella array
  principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato
  a tua scelta, in caso di perdina dovrà essere concesso un nuovo
  tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript
  random, restituisce un intervallo compreso tra 0 e 1 che necessita di
  essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

function numerorandom() {
  return Math.floor(Math.random()*90);
}

var estrazione = [];

// assegna numeri random all array controllando che non si ripetano.
do {
    estrazione.unshift(numerorandom());

    if (estrazione[0]==[1] || estrazione[0]==[2] || estrazione[0]==[3] || estrazione[0]==[4]) {
      estrazione.shift();
    }
} while (estrazione.length < 5);

console.log(`numeri estratti: `+estrazione);

var giocata = [32,54,2,12,67];
var indovinati = [];

//controlla i numeri giocati e quelli vincenti li inserisce in un nuovo array
for (var i = 0; i < estrazione.length; i++) {
  switch (giocata[i]) {
    case estrazione[0]:
    case estrazione[1]:
    case estrazione[2]:
    case estrazione[3]:
    case estrazione[4]:
     indovinati.push(giocata[i]);
     break;
  }
}

// log finali

console.log(`numeri giocati: `+giocata)
console.log(`numeri indovinati: `+indovinati);


switch (indovinati.length) {
  case 1:
    console.log('ESTRATTO!');
    break;
  case 2:
    console.log('AMBO!');
    break
  case 3:
    console.log('TERNO!');
    break
  case 4:
    console.log('QUATERNA!');
    break
  case 5:
    console.log('CINQUINA!');
    break;
  default:
    console.log('MI SPIACE RITENTA!');
}
