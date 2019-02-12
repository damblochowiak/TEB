/*var i;
for(i = 1; i <= 10; i++){
  document.write(i + ' ');
}
*/

//inkrementacja i++
//dekrementacja i--
//preinkrementacja ++i
//postinkrementacja i++

/*
1 = 1 inicjalizacja
i <=10 warunek
I++ uaktualnianie
*/


/*
  Napisz program, ktory wyświetli liczby z przedziału <13;20>. Wykorzystaj pętle for, każda liczba
  ma być zapisana w nowej linii.
*/

/*
var i;
for(i = 13; i <= 20; i++){
  document.write(i + '<br> ');
}
*/

/*
  Napisz program, który wypisze liczby z przedziału <5;30>, które są podzielne przez 5.
*/

/*
for(i = 5; i <= 30; i++){
  if(i % 5 == 0){
    document.write(i + ' ');
  }
}
*/


/*
Wypisz liczby parzyste z przedziau <10;50>. Po każdej liczbie wyświetl przecinek i spację. Po ostatniej liczbie wyświetl kropkę.
10, 12, 14, .... 50.
*/

for(i = 10; i <= 50; i++){
const divider = i === 50 ? '.' : ', '
  if(i % 2 == 0){
    document.write(i + divider);
  }
}
