/* 
JS galimi ciklai ir 'cikliskos' funkcijos/metai:
- for
- for-in
- for-of
- while
- do-while
- foreach
- map 
- filder
- reduce
- sort
*/

// bendra salyga darbas su tais paciais duomenimis

// FOR
// break: nutraukia ciklo darba
// continue:  eiti i sekancia ciklo iteracija, jei tokia yra

const list = [1, -5, 78, 2, 11, -14, 0, -3];

for (let i=0; i<list.length; i++){  //darbas su kiekvienu saraso nariu
    const item = list[i];
    /* if (item < -10) { // jei yra maziau,
        break; // paprasome kad ciklas baigtu darba */

 //arba pvz prasome kad isspausdintu visus neigiamus saraso kintamuosius
       
    if (item > 0) { // jei yra daugiau,
     continue;
     
    }
    console.log(item); 
}
console.clear();



// FOR-IN  (isanalizuoja kas yra list ir pagauna kintamuju reiksmes pats)
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (const i in list) { // pats pasiima i ir eina per sarasa pats automatiskai
    const item = list[i];
    if (item > 0) {      // tai reiskia praskippink jeigu yra daugiau nei 0
        continue;
    }
    
    console.log(i, item);
}
console.clear();

// FOR-OF
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (const item of list){ //duoda visus saraso narius, cia kai nereikalinga zinoti itemo indexo
if (item > 0){            // item gali  buti bet koks pavadinimas
    continue;
}
console.log(item);
}

console.clear();

// su for mes zinome saraso ilgi ir kiek ciklu prasisuks for, siuo arveju 8 kartus



//  WHILE   (tol, kol tenkinamos salygos)

//patogiau naudoti, kai sunku numatyti kiek kartu reikes sukti cikla norint gauti rezultata

let randomNumber = 0;
let randomNumberCount =0;

//kiek kartu reikesismesti kol 
while (randomNumber < 0.9){ 
    randomNumber = Math.random ();
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);  
}
console.clear();

let i = 0;   //cia yra isbarstytas for'as
while (i < list.length){ // cia tikrinama salyga
    const item = list[i];
    if (item < -10){
        break;
    }
    console.log(item);
    i++;
}

console.clear();

// DO-WHILE
// break: nutraukia ciklo darba
let dwi = 0; //dwi - do while index

do {
    console.log(dwi);
    if (dwi > 2 ) {
        break;
    }
    dwi++; //padidino 1 vnt  // kaip keisti iteracija
} while (dwi < 5)  // ar galima testi darba
