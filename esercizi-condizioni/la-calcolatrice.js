/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var input1 = 15;
var input2 = 2;

var operatore = '+';

switch (operatore) {
  case '+':
    console.log(input1+input2);
    break;
  case '-':
    console.log(input1-input2);
    break;
  case '*':
    console.log(input1*input2);
    break;
  case '/':
    console.log(input1/input2);
    break;
  case '%':
    console.log(input1%input2);
    break;
  case '^':
    console.log(input1**input2);
    break;
  case 'm':
    console.log((input1+input2)/2);
    break;
  default:
    console.log('impossibile!');
}
