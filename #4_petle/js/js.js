/*
  Narysuj choinkę

  *
  **
  ***
  ****
*/

var i;
for (i = 1; i <= 4; i++) {
  for (j = 0; j <= i; j++) {
    document.write('*');

  }
  document.write('<br>');
}

/*
  Użytkownik podje z klawiatury maksymalny poziom choinki i wartość jaka ma się wyświetlić.
*/


document.write('<br>');

var elIlosc = document.getElementById('ilosc');
var elZnak = document.getElementById('znak');
var elPrzycisk = document.getElementById('przycisk');
var elWyswietl = document.getElementById('wyswietl');
var ilosc, znak, wyswietl = '';

function wyswietlZnaki(){
  wyswietl = '';
  ilosc = elIlosc.value;
  znak = elZnak.value;

  for (i = 1; i <= ilosc; i++) {
    for (j = 1; j <= i; j++) {
      wyswietl += znak;
    }
      wyswietl += '<br>';
}

  //wyswietl = ilosc + znak;
  elWyswietl.innerHTML = wyswietl;

}

elPrzycisk.addEventListener('click', wyswietlZnaki);


//petla while

i = 0;
while (i < 5){
  document.write(i + '');
  i++;
}


i = 0;
while (i++ < 6){
  document.write(i + '');
}


//petla do while


/*var pass1 = 'walentynki', pass2 = '';

do {
  pass2 = prompt('Podaj hasło');
} while (pass1 != pass2);
*/

////////////////////////////////////////////////


var pass1 = 'walentynki', pass2 = '', licznik = 0;

do {
  pass2 = prompt('Podaj hasło');
} while (pass1 != pass2 && licznik <3);

if (licznik == 3){
  alert('Błędne hasło!');
}else if (pass1 == pass2){
  alert('Poprawne hasło');
}
