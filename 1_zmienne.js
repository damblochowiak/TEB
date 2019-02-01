/**
 * 1_zmienne.js
 * Author: Damian Błochowiak <xomod99@gmail.com>
 * MIT License
 */

/**
 * @description Wyświetl zmienną typu integer (liczba).
 */
(function() {
  zmienna = 18;
  //let zmienna = 18;
  writeLine("Zmienna typu integer: " + zmienna);
})();

/**
 * @description Wyświetl swoje imię. (konkatenacja - concatenation)
 */
(function() {
  const imie = "Janusz";

  writeLine("Twoje imię: " + imie);
})();

/** Przykładowe liczby na cele poniższych działań. */
let a = 5,
  b = 3;

/**
 * @description Dodawanie dwóch liczb.
 */
(function() {
  // Dodawanie wartości zmiennej a do wartości zmiennej b.
  const suma = a + b;

  writeLine("Suma a i b wynosi: " + suma);
})();

/**
 * @description Ułamek z dwóch liczb.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow}
 */
(function() {
  const potega = Math.pow(a, b);

  writeLine("Potęga a i b wynosi: " + potega);
})();

/**
 * @description Dzielenie dwóch liczb.
 */
(function() {
  const modulo = 11 % 4;

  writeLine("Dzielenie liczby 11 przez 4 wynosi: " + modulo);
})();

/**
 * @description Typy zmiennych/danych.
 */
(function() {
  let c = 3,
    d = 12.5;

  console.log(`Zmienna c (${c})`, "jest typu", typeof c); // Number
  console.log(`Zmienna d (${d})`, "jest typu", typeof d); // Number

  d = "tekst";
  console.log(`Zmienna d (${d})`, "jest typu", typeof d); // String

  let prawda = true;
  console.log(`Zmienna prawda (${prawda})`, "jest typu", typeof prawda); // Boolean

  let nic = null;
  console.log(`Zmienna nic (${nic})`, "jest typu", typeof nic); // Null

  let pusta;
  console.log(`Zmienna pusta (${pusta})`, "jest typu", typeof pusta); // Undefined
})();

(function() {
  /** Systemy liczbowe */
  let dziesietny = 10;
  let oktalny = 012;

  /*
  012 => 1 * 8^1 + 2 * 8 ^ 8 + 2 = 10
  */

  let szesnastkowy = 0xa;
  console.log("Szesnanstkowy 0xa wynosi", szesnastkowy);
})()(
  /**
   * @description Podawanie pierwszej liczby do prompt.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt}
   */
  function() {
    let liczba = prompt("Podaj pierwszą liczbę");

    console.log(
      `Pierwsza liczba wynosi ${liczba}`,
      "i jest typu",
      typeof liczba
    );
  }
)();

/*
  Zadanie 1
  Użytkownik wprowadza z klawiatury dwue liczby. Wyświetl na ekranie sumę tych liczb w formacie:
  "Suma a i b wynosi: ....."
*/
(function() {
  let l1 = prompt("Podaj pierwszą liczbę");
  let l2 = parseInt(prompt("Podaj drugą liczbę"));
  l1 = parseInt(l1);

  let dodawanie = l1 + l2;
  writeLine("Suma " + l1 + " i " + l2 + " wynosi: " + dodawanie);
})();

/*
Zadanie 2
Użytkownik wprowadza z klawiatury dwue liczby (mogą być zmiennoprzecinkowe). Wyświetl na ekranie sumę tych liczb w formacie:
"Suma a i b wynosi: ....."
*/
(function() {
  let l1 = prompt("Podaj pierwszą liczbę");
  let l2 = parseFloat(prompt("Podaj drugą liczbę"));
  l1 = parseFloat(l1);

  let dodawanie1 = l1 + l2;
  writeLine("Suma " + l1 + " i " + l2 + " wynosi: " + dodawanie1);
})();

// * Camel Case
// => liczbaPierwsza, zmiennaPomocnicza, mamNaImie

// * Snake case
// => liczba_pierwsza, Zmienna_pomocnicza, mam_na_imie

// * Kebab case
// => liczba-pierwsza, zmienna-pomocnicza, mam-na-imie

// * Studly caps
// => lIczBaPieRWszA, zMiENNaPomoCNIcza, mAmnAIMie

/*
  Zadanie 3
  Napisz progam, który obliczy pole prostokąta. Użytkownik podaje dane z klawiatury (liczby zmiennoprzecinkowe)
  Wynik wyświetl na ekranie w formacie: "Bok a = ...., bok b = ....., pole wynosi: .....cm^2 (w indexie górnym)"
*/
(function() {
  let polea = prompt("Podaj a");
  let poleb = prompt("Podaj b");
  a1 = parseFloat(polea);
  b1 = parseFloat(poleb);

  let wynikpole = a1 * b1; // ? Zmienna nie została użyta.
  let wynosi = 2 * a1 + 2 * b1;

  let dodawanie1 = a1 + b1; // ? Zmienna nie została użyta.

  writeLine("Bok a = " + a1 + ", bok b = " + b1 + "pole wynosi " + wynosi);
})();

/**
 * @description Wyświetla jedną linijkę tekstu w dokumencie.
 * @param {string} text
 */
function writeLine(text) {
  document.write(text);
  document.write("<br/>");
}
