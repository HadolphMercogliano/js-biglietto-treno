// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// SVOLGIMENTO
// DICHIARAZIONE VARIABILI
const pricePerKm = 0.21;

// let kilometri = parseInt(kilometri);
// let age = parseInt(age);




// 1.CHIEDI ALL' UTENTE QUANTIN CHILOMETRI VUOLE PERCORRERE
let kilometri = parseInt(prompt('quanti kilometri vuoi percorrere?'));
console.log('kilometri' + kilometri);

// 2.CHIEDI L'ETà DEL PASSEGGERO
let age = parseInt(prompt('quanti anni hai?'));
console.log('anni' + age);

// 3.CALCOLA IL PREZZO TOTALE
let totalPrice = (0.21 * kilometri)
console.log('prezzo maggiorenni under65: 655' + totalPrice);

// PREZZO UNDER 18
let PriceDiscount20 = (totalPrice - (totalPrice * 20 / 100));
console.log('prezzo scontato under18: ' + PriceDiscount20);

// PREZZO OVER 65
let PriceDiscount40 = (totalPrice - (totalPrice * 40 / 100));
console.log('prezzo scontato over65: ' + PriceDiscount40);

// 4.SE IL PASSEGGERO HA MENO DI 18 ANNI IL BIGLIETTO è SCONTATO DEL 20%
if (age < 18) {
    document.getElementById('final_price').innerHTML = "Il prezzo del tuo biglietto è di € " + PriceDiscount20.toFixed(2) + "grazie allo sconto UNDER18";
}

// 5.SE IL PASSEGGERO HA 65 ANNI O PIU' IL BIGLIETTO è SCONTATO DEL 40%
else if (age >= 65) {
    document.getElementById('final_price').innerHTML = "Il prezzo del tuo biglietto è di € " + PriceDiscount40.toFixed(2) + "grazie allo sconto over65";
}
else {
    document.getElementById('final_price').innerHTML = "Il prezzo del tuo biglietto è di € " + totalPrice.toFixed(2);

}





