/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  http://www.imparareaprogrammare.it
*/

var arraymulti = [];

arraymulti[0] = new Array(5);
arraymulti[1] = new Array(5);
arraymulti[2] = new Array(5);

for (var l = 0; l < arraymulti.length; l++) {

  for (var i = 0; i < arraymulti[l].length; i++) {
    arraymulti[l][i] =  Math.floor(Math.random() * 50)
  }
  
}

console.log(arraymulti);
