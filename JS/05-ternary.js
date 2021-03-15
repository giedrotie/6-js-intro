/*

TERNARY OPERATOR: ? (klaustukas)

palyginimas ? ka daryti jei tenkina logika : ka daryti jei logikos netenkina

palyginimas ? true : false

// skirtas gauti is karto reiksmem

*/



// labai svarbu kad sioje vietoje butu let (leidzia keisti reiksmes), jei bus const neveiks

const a = 5;
const b =7;

let ats = '';
if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
    // cia draudziama rasyti maziau
}
console.log(ats);

console.log(' - - - - - - - - - - -');
// galima uzrasyti daug paprasciau:
// inline if'as , kai reiksme priskiriama einamuoju metu

const c = 10;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';
console.log(ats2);

// po ? visada pradzioje klausia ar TRUE : po dvitaskio FALSE
// jeigu randamas scenarinus kada gali panaudoti ternary scenariju, galima ji laisvai naudoti

//niekada nerasyti nestintu ternary operatoriu!!!!

const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);

// suma / kiekis