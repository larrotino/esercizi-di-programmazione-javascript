/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/
var valori = [1,2,3,6,10,5,77,43,24,65,1,44,6,322,53];

//metodo reduce per addizionare tutto l'array
var accumulatore = (accumulator, currentValue) => accumulator + currentValue;
var media = valori.reduce(accumulatore)/valori.length;


//metodo filter crea una variabile con solo gli elementi filtrati
var filtrati = valori.filter(valore=>valore<media)

/*
//vecchia formula

var filtrati = valori.filter(
  function evenNumbers (valore) {
    return valore < media;
  }
)
*/
console.log(filtrati);
console.log(filtrati.length+'quantità valori minori alla media');
console.log(Math.abs(filtrati.length-valori.length)+'quantità valori minori alla media');
