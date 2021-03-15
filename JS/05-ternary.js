/*

TERNARY OPERATOR: ? (klaustukas)

palyginimas ? ka daryti jei tenkina logika : ka daryti jei logikos netenkina

palyginimas ? true : false

// skirtas gauti reiksmem is karto 

*/


const a = 5;
const b =7;

let ats = '';
                 // let nes as ketinu kintamojo reiksme pakeisti,priklausomai    nuo to ka as tenai sugalvosiu
                // labai svarbu kad sioje vietoje butu let (leidzia keisti reiksmes), jei bus const neveiks bus error
if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
                // cia draudziama rasyti maziau, nes vien tai kad nera daugiau nereiskia kad abu skaiciais nebus vienodo
}
console.log(ats);  //  spausdina ne daugiau

console.log(' - - - - - - - - - - -');
// galima uzrasyti daug paprasciau:
// inline if'as , kai reiksme priskiriama kontekstiniam atvejui einamuoju metu

const c = 10;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';
console.log(ats2); //  spausdina daugiau 

// po ? visada pradzioje klausia ar TRUE : po dvitaskio FALSE
// jeigu randame scenariju, galima naudoti ternary, 
 
//niekada nerasyti nestintu ternary operatoriu!!!!
//PS viena pasunkinta NESTINTO TERNARY OPERACIJA bus ir egzamine prie 


console.log(' - - - - - - - - - - -');

const pazymiai = [7, 10, 7];
   
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];
// kad suskaiciuoti vidurki, reikalinga  ----- suma / kiekis
const vidurkis = suma / pazymiai.length;
console.log(vidurkis);
