let elImie = document.getElementById('imie')
let elNazwisko = document.getElementById('nazwisko')
let elKomunikat = document.getElementById('komunikat')
let elPrzycisk = document.getElementById('przycisk')
let duzeMale;

function zamien(){
  duzeMaleImie = elImie.value.charAt(0).toUpperCase() +
  elImie.value.slice(1).toLowerCase();

  let nazwisko = elImie.value;
  nazwisko = nazwisko.charAt(0).toUpperCase() +
  nazwisko.slice(1).toLowerCase();

  let pom = 'Imię: ' + duzeMaleImie;
      pom += '<br>Nazwisko: ' + nazwisko + '<hr>';

  elKomunikat.innerHTML = pom;
}

elPrzycisk.addEventListener('click', zamien);


//############################################################################

let wycinek = 'Janusz Kowal';

wycinek = wycinek.substr(7, 3)
console.log('Wycinek: ' + wycinek);  //Kow
