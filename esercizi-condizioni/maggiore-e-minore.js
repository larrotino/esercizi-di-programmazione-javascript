/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/

var numero1 = 5;
var numero2 = 20;
var numero3 = 3;
var numero4 = 282;

if (numero1>numero2 && numero1>numero3 && numero1>numero4) {
        console.log('uno è maggiore');
  }else if (numero2>numero1 && numero2>numero3 && numero2>numero4) {
        console.log(`${numero2} è il numero più alto`);
  }else if (numero3>numero1 && numero3>numero2 && numero3>numero4) {
        console.log(`${numero3} è il numero più alto`);
  }else if (numero4>numero1 && numero4>numero2 && numero4>numero3) {
        console.log(`${numero3} è il numero più alto`);
  }
