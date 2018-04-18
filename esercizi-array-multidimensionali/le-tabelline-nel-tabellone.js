/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/


var valori = [0,1,2,3,4,5,6,7,8,9,10];

var risultati = [[],[],[],[],[],[],[],[],[],[],[]];

for (var l = 0; l < valori.length; l++) {
  for (var i = 0; i < valori.length; i++) {
    risultati[l][i] = valori[l]*valori[i];
  }
}

var spazio = ' | ';

//to do =  il consol log matrice
