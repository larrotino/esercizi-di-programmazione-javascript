/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
var dolce1 = 'tiramisu';
var dolce2 = 'torta della nonna';
var dolce3 = 'Cheesecake alla nutella';
var dolce4 = 'Macedonia';

var scelta = 2;

if (scelta == 1){
  console.log(`hai scelto il ${dolce1}`);
}else if (scelta == 2) {
  console.log(`hai scelto la ${dolce2}`);
}else if (scelta == 3) {
  console.log(`hai scelto la ${dolce3}`);
}else if (scelta == 4) {
  console.log(`hai scelto la ${dolce4}`);
} else {
  console.log('dolce non disponibile');
}
