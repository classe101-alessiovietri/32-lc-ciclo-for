// Stampa i primi 5 numeri a partire da un numero scelto
let i = 1;
console.log(i); // 1
// i = i + 1;
i++;
console.log(i); // 2
// i = i + 1;
++i;
console.log(i); // 3
// i = i + 1;
i++;
console.log(i); // 4
// i = i + 1;
++i;
console.log(i); // 5

// Trasformazione in ciclo for
// for (INIZIALIZZAZIONE CONTATORE; COND. DI PERMANENZA; MODALITà DI AVANZAMENTO NEL CICLO) {
for (let iDue = 1; iDue <= 5; iDue++) {
    console.log('iDue', iDue);
}

// QUI i AVRà VALORE 5

for (i = 1; i <= 5; i++) {
    console.log('i nel ciclo', i);
}

// 1) i = 1 ; VERO ; ALLA FINE: i = 2
// 2) i = 2 ; VERO ; ALLA FINE: i = 3
// 3) i = 3 ; VERO ; ALLA FINE: i = 4
// 4) i = 4 ; VERO ; ALLA FINE: i = 5
// 5) i = 5 ; VERO ; ALLA FINE: i = 6
// 6) i = 6 ; FALSO => ESCO

// QUI i AVRà VALORE 6

for (i; i <= 5; i++) {
    console.log('i nel ciclo NON inizializzata', i);
}

// QUESTO NON VERRà MAAAAI ESEGUITO
// for (i = 6; i <= 5; i++) {
//     console.log('i nel ciclo inizializzata a 6', i);
// }

let somma = 0;
for (let k = 0; k <= 5; k++) {
    somma = somma + k;
}

// somma = 0 + 0 => 0
// somma = 0 + 1 => 1
// somma = 1 + 2 => 3
// somma = 3 + 3 => 6
// somma = 6 + 4 => 10
// somma = 10 + 5 => 15

console.log('SOMMA:', somma);









// Stampa i primi 5 numeri a partire da un numero scelto ogni 2
let j = 10;
console.log(j); // 10
j = j + 2;
console.log(j); // 12
j = j + 2;
console.log(j); // 14
j = j + 2;
console.log(j); // 16
j = j + 2;
console.log(j); // 18

for (let jLo = 10; jLo <= 18; jLo = jLo + 2) {
    console.log('jLo', jLo);
}









for (let finoA5 = 100; finoA5 > 5; finoA5 = finoA5 / 2) {
    console.log('finoA5', finoA5);
}






const ul = document.querySelector('.list');
for (let numbero = 1; numbero <= 90; numbero++) {
    console.log('NuMbErO', numbero);

    // ul.innerHTML = ul.innerHTML + `<li>${numbero}</li>`;
    // ul.innerHTML += `<li>${numbero}</li>`;

    const newLi = document.createElement('li');
    newLi.innerHTML = numbero;
    ul.append(newLi);
}









// let x = 2;

// let y = x++;

// 1) y = x => y è uguale a 2
// 2) x++ => x diventa uguale a 3

// (y = x) = x + 1;






// y = ++x;

// y = (x = x + 1);

// x diventa uguale a 3
// y diventa uguale a x che ha valore 3




let numero = 10;

// % = operatore MODULO =>  restituisce il resto della divisione
//                          tra il numero a sinistra e il numero
//                          a destra dell'operatore

if (numero % 5 == 0) {
    console.log(numero, 'è multiplo di 5');
    console.log('RESTO DELLA DIVISIONE:', numero % 5);
}
else {
    console.log(numero, 'NON è multiplo di 5');
    console.log('RESTO DELLA DIVISIONE:', numero % 5);
}

if (numero % 3 == 0) {
    console.log(numero, 'è multiplo di 3');
    console.log('RESTO DELLA DIVISIONE:', numero % 3);
}
else {
    console.log(numero, 'NON è multiplo di 3');
    console.log('RESTO DELLA DIVISIONE:', numero % 3);
}