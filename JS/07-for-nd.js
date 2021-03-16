
// nd   CIKLO FOR PANAUDOJIMAS
// 1 suma skaiciu esanciu intervale imtinai 
/*  0-4 
    0-100
    574-815
    -50 - 50
    -70 - 30
ats: Intervale nuo 0 iki 4 suma yra 10.
*/

const nuo = 0;
const iki = 4;
let suma = 0;

if (nuo <= iki){
for (let i = nuo; i <= iki; i++){
    suma = suma + i;
}
} else {
    for (let i = iki; i <= nuo; i++){
        suma += i;
    }
}
console.log(suma);
const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log(ats);


// 2 perrasymas tekstinio tipo kintamuju reiksmes is galo
// a 

const perrasymoTekstas = 'tekstukas';
let reverse = '';

for (let r = 0; r < perrasymoTekstas.length; r++){
    reverse = perrasymoTekstas[r] + reverse;
    console.log(r);
}
console.log(perrasymoTekstas, '->', reverse);


// suskaiciuoti, kiek nurodytame intervale yra skaiciu, kurie dalijasi be liekanos is skaiciu 3,5,7

// 0 - 11
// 8 -13
// -18 - 18

const nuo1 = 0
const iki1 = 11
const daliklis1 = 3
let kiekis1 = 0;

for (let u = nuo1; u < iki1; u++){
    console.log(u, u / daliklis1);
    if (u % daliklis1 === 0) {
        kiekis1++;
    }
}

const ats1 = `Skaiciu intervale tarp ${nuo1} ir ${iki1}, besidalijanciu be liekanos is ${daliklis1} yra ${kiekis1} vienetai.`;
console.log(ats1);
//Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra 4 vienetai.


console.log('----------');

const nuo2 = 0
const iki2 = 11
const daliklis2 = 5
let kiekis2 = 0;

for (let u = nuo2; u < iki2; u++){
    console.log(u, u / daliklis2);
    if (u % daliklis2 === 0) {
        kiekis2++;
    }
}

const ats2 = `Skaiciu intervale tarp ${nuo2} ir ${iki2}, besidalijanciu be liekanos is ${daliklis2} yra ${kiekis2} vienetai.`;
console.log(ats2);
// Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra 3 vienetai.


console.log('----------');


const nuo3 = 0
const iki3 = 11
const daliklis3 = 7
let kiekis3 = 0;

for (let u = nuo3; u < iki3; u++){
    console.log(u, u / daliklis3);
    if (u % daliklis3 === 0) {
        kiekis2++;
    }
}

const ats3 = `Skaiciu intervale tarp ${nuo3} ir ${iki3}, besidalijanciu be liekanos is ${daliklis3} yra ${kiekis3} vienetai.`;
console.log(ats3);
// Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra 0 vienetai.

// b

const nuo4 = 8;
const iki4 = 31;
const daliklis4 = 3;
let kiekis4 = 0;

for (let g = nuo4; g < iki4; g++){
    console.log(g, g / daliklis4);
    if ( g % daliklis4 === 0) {
        kiekis4++;
    }
}
 const ats4 = `Skaiciu intervale tarp ${nuo4} ir ${iki4}, besidalijanciu be liekanos is ${daliklis4} yra ${kiekis4} vienetai.`;
 console.log(ats4);
 
 // Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra 8 vienetai.

const nuo5 = 8;
const iki5 = 31;
const daliklis5 = 5;
let kiekis5 = 0;

for (let g = nuo5; g < iki5; g++){
    console.log(g, g / daliklis5);
    if ( g % daliklis5 === 0) {
        kiekis5++;
    }
}
 const ats5 = `Skaiciu intervale tarp ${nuo5} ir ${iki5}, besidalijanciu be liekanos is ${daliklis5} yra ${kiekis5} vienetai.`;
 console.log(ats5);
 
 // Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra 5 vienetai.

 const nuo6 = 8;
 const iki6 = 31;
 const daliklis6 = 7;
 let kiekis6 = 0;
 
 for (let g = nuo6; g < iki6; g++){
     console.log(g, g / daliklis6);
     if ( g % daliklis6 === 0) {
         kiekis6++;
     }
 }
  const ats6 = `Skaiciu intervale tarp ${nuo6} ir ${iki6}, besidalijanciu be liekanos is ${daliklis6} yra ${kiekis6} vienetai.`;
  console.log(ats6);
  
  // Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra 3 vienetai.

  // c 

const nuo7 = -18;
const iki7 = 18;
const daliklis7 = 3;
let kiekis7 = 0;

for (let g = nuo7; g < iki7; g++){
    console.log(g, g / daliklis7);
    if ( g % daliklis7 === 0) {
        kiekis7++;
    }
}
 const ats7 = `Skaiciu intervale tarp ${nuo7} ir ${iki7}, besidalijanciu be liekanos is ${daliklis7} yra ${kiekis7} vienetai.`;
 console.log(ats7);
 
 // Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra 12 vienetai.

 const nuo8 = -18;
const iki8 = 18;
const daliklis8 = 5;
let kiekis8 = 0;

for (let g = nuo8; g < iki8; g++){
    if ( g % daliklis8 === 0) {
        kiekis8++;
    }
}
 const ats8 = `Skaiciu intervale tarp ${nuo8} ir ${iki8}, besidalijanciu be liekanos is ${daliklis8} yra ${kiekis8} vienetai.`;
 console.log(ats8);
 
 // Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra 7 vienetai.

 const nuo9 = -18;
 const iki9 = 18;
 const daliklis9 = 7;
 let kiekis9 = 0;
 
 for (let g = nuo9; g < iki9; g++){
     if ( g % daliklis9 === 0) {
         kiekis9++;
     }
 }
  const ats9 = `Skaiciu intervale tarp ${nuo9} ir ${iki9}, besidalijanciu be liekanos is ${daliklis9} yra ${kiekis9} vienetai.`;
  console.log(ats9);
  
  // Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra 5 vienetai.