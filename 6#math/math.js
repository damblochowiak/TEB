let a = 13.3;
let b = 29.5;
let c = 1;

let pierwiastek = Math.sqrt(a)

let min = Math.min(a, b, c);
let max = Math.max(a, b, c);

let zaokraglenie = Math.round(b);
console.log(zaokraglenie);


//abs, round, floor

let x = -56;
let y = -13.1;
let z = -14.90;

document.write('<br>' + Math.abs(x) + '<br>'); //56
document.write('<br>' + Math.abs(y) + '<br>'); //13.1
document.write('<br>' + Math.abs(z) + '<br>'); //14.9



document.write('<br>' + Math.round(x) + '<br>'); //-56
document.write('<br>' + Math.round(y) + '<br>'); //-13
document.write('<br>' + Math.round(z) + '<br>'); //-15

document.write('<br>' + Math.floor(x) + '<br>'); //-56
document.write('<br>' + Math.floor(y) + '<br>'); //-14
document.write('<br>' + Math.floor(z) + '<br>'); //-15

//potęgowanie

let potega = Math.pow(2, 10);
console.log(potega);

//losowanie

let losuj = Math.random();
console.log(losuj);

//wylosuj liczbę z przedziału (0;10>

losuj = Math.floor(Math.random() * 11);
console.log(losuj);


//Z.1 Wylosuj 20 liczb z przedziału (-5;5>. Liczby mają być wylosowane po naciśnięciu przycisku.

losuj = Math.random()10 - 5 <-5;5)
console.log(losuj)



//Z.2 Napisz funkcję, która zostanie wywowałana po najechaniu na przycisk, użytkownik podaje w polach liczbowych przedział z jakiego mają być wylosowane liczby.
