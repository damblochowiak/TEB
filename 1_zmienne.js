zmienna = 18;
//let zmienna = 18;
document.write(zmienna);

let imie = "Janusz";
document.write("<br>Twoje imię: <br>" + imie);

// + konkatenacja

let a = 5, b =3, suma;
suma = a + b;
document.write("<br>Suma a i b wynosi: <br>" + suma);


//potęgowanie

let potega = Math.pow(a, b);
//alert(potega);  //125


//reszta z dzielenia
let modulo = 11% 4;
console.log(modulo);


//typy danych
let c = 3, d = 12.5
console.log(typeof(c)); //number
console.log(typeof(d)); //number

d = "tekst";
console.log(typeof(d)); //string
let prawda = true;
console.log(typeof(prawda)); //booleon

let nic = null;
console.log(typeof(nic)); //object

let pusta;
console.log(typeof(pusta)); //undenfined


//systemy liczbowe
let dziesietny = 10;
let oktalny = 012;

/*
012 => 1 * 8^1 + 2 * 8 ^ 8 + 2 = 10
*/

let szesnastkowy = 0xA;
console.log(szesnastkowy);


//prompt

let liczba = prompt("Podaj pierwszą liczbę");
console.log('Pierwsza liczba wynosi: ' + liczba);

console.log(typeof(liczba));

/*
  Zadanie 1
  Użytkownik wprowadza z klawiatury dwue liczby. Wyświetl na ekranie sumę tych liczb w formacie:
  "Suma a i b wynosi: ....."
*/

/*let l1 = prompt('Podaj pierwszą liczbę');
let l2 = parseInt(prompt('Podaj drugą liczbę'));
l1 = parseInt(l1);


let dodawanie= l1 + l2;
document.write("<br>Suma " + l1 + " i " + l2 + " wynosi: " + dodawanie);



/*
Zadanie 2
Użytkownik wprowadza z klawiatury dwue liczby (mogą być zmiennoprzecinkowe). Wyświetl na ekranie sumę tych liczb w formacie:
"Suma a i b wynosi: ....."
*/

/*let l1 = prompt('Podaj pierwszą liczbę');
let l2 = parseFloat(prompt('Podaj drugą liczbę'));
l1 = parseFloat(l1);


let dodawanie1= l1 + l2;
document.write("<br>Suma " + l1 + " i " + l2 + " wynosi: " + dodawanie1);
*/

//Camel Case
//liczbaPierwsza zmiennaPomocnicza mamNaImie

/*
  Zadanie 3
  Napisz progam, który obliczy pole prostokąta. Użytkownik podaje dane z klawiatury (liczby zmiennoprzecinkowe)
  Wynik wyświetl na ekranie w formacie: "Bok a = ...., bok b = ....., pole wynosi: .....cm^2 (w indexie górnym)"
*/

let polea = prompt('Podaj a');
let poleb =  prompt("Podaj b");
a1 = parseFloat(polea);
b1 = parseFloat(poleb);

let wynikpole = a1 * b1;
let wynosi = 2 * a1 + 2 * b1;


let dodawanie1= a1 + b1;
document.write("<br>Bok a = " + a1 + ", bok b = " + b1 + "pole wynosi " + wynosi);
