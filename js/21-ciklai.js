/* 
JS galimi ciklai ir 'cikliskos' funkcijos/metodai:
(funkcijos)
- for
- for-in
- for-of
- while
- do-while

(metodai)
- foreach
- map 
- filder
- reduce
- sort
*/

// bendra salyga darbas su tais paciais duomenimis!!!!!

console.log('-------------FOR---------------------');

// FOR

// break: nutraukia ciklo darba
// continue:  eiti i sekancia ciklo iteracija, jei tokia yra

const list = [1, -5, 78, 2, 11, -14, 0, -3];

for (let i=0; i<list.length; i++){  //darbas su kiekvienu saraso nariu
    const item = list[i];

     /* 
    if (item < -10) { // jei yra maziau, paprasome kad ciklas baigtu darba
    break; 
    }  */

    if (item > 0) {  //jei yra daugiau uz 0, prasome kad isspausdintu visus neigiamus saraso kintamuosius
     continue;
     
    }
    console.log(item); 
}

console.log('-------------FOR-IN----------------');

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

console.log('-------------FOR-OF-----------------');

// FOR-OF

// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (const item of list){ //duoda visus saraso narius, cia kai nereikalinga zinoti itemo indexo
if (item > 0){            // item gali  buti bet koks pavadinimas
    continue;
}
console.log(item);
}

console.log('-------------------');

// su for mes zinome saraso ilgi ir kiek ciklu prasisuks for, siuo arveju 8 kartus

console.log('----------WHILE-------------');

//  WHILE   (tol, kol tenkinamos salygos)
// patogiau naudoti, kai sunku numatyti kiek kartu reikes sukti cikla norint gauti rezultata

// uzduotis 1: kiek kartu reikes ismesti kol tas random skaicius bus < 0.9

let randomNumber = 0;
let randomNumberCount =0;

while (randomNumber < 0.9){ 
    randomNumber = Math.random ();
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);  
}
console.log('-------------------');

let i = 0;                  //cia yra isbarstytas for'as
while (i < list.length){    // <- tikrinama salyga
    const item = list[i];
    if (item < -10){
        break;
    }
    console.log(item);
    i++;
}

console.log('----------------DO-WHILE------------------');

// DO-WHILE
// break: nutraukia ciklo darba

let dwi = 0;    //dwi = do while index

do {
    console.log(dwi);
    if (dwi > 2 ) {
        break;
    }
    dwi++;             //kaip keisti iteracija? padidinti 1 vnt
} while (dwi < 5)      // ar galima testi darba?

console.log('-----------------FOREACH-------------------');

// FOREACH  
// jis is karto soka ant saraso ir eina per visa sarasa kaip traukinys 
// sustabdyti neimanoma

let FEsuma = 0;
list.forEach(function(item) {     // bevarde funkcija 
    FEsuma += item;
    console.log(FEsuma);
})
console.log('-------------------');

// indexui ir nariui issitraukti 
list.forEach(function(item, index) {  
    console.log(index, item);
})
//islogina
// 0 1
// 1 -5
// 2 78
// 3 2
// 4 11
// 5 -14
// 6 0
// 7 -3

console.log('-------------------');

// nariui, indexui ir sarasui istraukti 
list.forEach(function(item, index, arr) {  
    console.log(index, item, arr);
})

// 0 1 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 1 -5 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 2 78 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 3 2 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 4 11 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 5 -14 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 6 0 (8) [1, -5, 78, 2, 11, -14, 0, -3]
// 7 -3 (8) [1, -5, 78, 2, 11, -14, 0, -3]

console.log('-----------');

// kitas uzrasymo budas
list.forEach((item, index) => {
    console.log(index, item);
})
// 0 1
// 1 -5
// 2 78
// 3 2
// 4 11
// 5 -14
// 6 0
// 7 -3
console.log('-------------------');

// uzrasymo budas sumai 
let FEsuma1 = 0;
list.forEach(item => FEsuma1 += item)
    console.log(FEsuma1);

// 70
console.log('-------------------');

// uzdavinys 1: kai norime istraukti narius is saraso sarase
    
    const doubleList = [[1, 5], [8, 99], [-8, -7, 15, 4], [3]];
    let dlSuma = 0;

    doubleList.forEach(innerList => innerList.forEach(n => console.log(n)))

    // 1
    // 5
    // 8
    // 99
    // -8
    // -7
    // 15
    // 4
    // 3    
    console.log('-----------');

// uzdavinys 2: ciklas suskaiciuoti SUMA VISU SARASO NARIU NET VIDUJE

    doubleList.forEach(innerList => innerList.forEach(n => dlSuma +=n ));
    console.log(dlSuma);

    // 120
    console.log('-----------');

// uzdavinys 2 ~~~ kitas uzrasymo budas skaiciuoti sumai su forEach

    doubleList.forEach(
        innerList => innerList.forEach(
         n => dlSuma +=n
         )
    );
    console.log(dlSuma);
    // 240, nes pridejo 120 prie jau buvusios sumos 120
    
    console.log('-----------');

// uzdavinys 3: jei tarp sarasu sarasu yra paprastas skaicius (innerItem)

console.log('-------trukstamas sprendimas-------------------');


console.log('----------------MAP--------------------');

// MAP - skirtas ARRAY reiksmiu modifikavimui
// veikia tik su ARRAY
// neveikia tekstui ir objects!!!!!!!!

// uzduotis 1 : saraso nariu kelimas kvadratu -> grazinti saraso formatu
const mapList1 = [1, 2, 3, 4, 5, 6];
const mapListSquare1 = [];

for (const num of mapList1) { // num = i kintamasis
    mapListSquare1.push(num * num);
}
console.log(mapListSquare1);
// (6) [1, 4, 9, 16, 25, 36]

console.log('-----------');
// kitas sprendimo budas:

const mapList2 = [1, 2, 3, 4, 5, 6];
const forListSquare2 = [];
const mapListSquare2 = mapList2.map(n => n * n);
console.log(mapListSquare2);

// (6) [1, 4, 9, 16, 25, 36]
console.log('-----------');

console.log('---- => uz "rodykles" reiksme "ka daryti?"-----');

// uzdavinys 2: visi neigiami skaiciai turi buti konvertuoti i nuli

const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n); 
                                // pasiimu skaiciu n ir jei jis yra < 0 , grazinu 0
console.log(pazymiai);
console.log(konvertuotiPazymiai);
// (6) [10, -8, 2, -6, 8, -2]
// (6) [10, 0, 2, 0, 8, 0]

console.log('-----------');

// uzdavinys 3: reikia grazinti sveikuosius skaicius
const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.01];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);

// (6) [3.14, 5, 6.7, -14.7, -8, 0.01]
// (6) [3, 5, 7, -15, -8, 0]
console.log('-----------');

console.log('----MAP ciklas parasytas su FOR---pvz----');

// map ciklas parasytas su paprastu for
for (let i=0; i<desimtainiai.length; i++) {
    desimtainiai[i] = Math.round(desimtainiai[i]);
}
console.log(desimtainiai);
// (6) [3, 5, 7, -15, -8, 0]

console.log('---------------FILTER----------------');

//FILTER  -- atfiltruoja kas aktualu, visus kitus kintamuosius ismeta

// uzduotis 1: atrinkti tik tikrus pazymius, t.y. [1...10]
const marks = [10, -8, 2, -6, 8, -2];

const filteredMarks = marks.filter(m => m > 0); // cia su => paslepta ifo salyga,
                                                // kad atfiltruoti tik tuos kurie skaiciai m > 0
console.log(marks);
console.log(filteredMarks);
// grazina   (6) [10, -8, 2, -6, 8, -2]
// grazina   (3) [10, 2, 8]
console.log('------------------');

// uzduotis 2:  atfiltruoti nuo 1 iki 10
const marks1 = [10, -8, 2, -6, 8, -2, 11, 55];

const filteredMarks1 = marks1.filter(m => m >= 1 && m <= 10); 
console.log(marks1);
console.log(filteredMarks1);

// grazina   (8) [10, -8, 2, -6, 8, -2, 11, 55]
// grazina   (3) [10, 2, 8]

console.log('------------------');
// uzduotis 3:  atfiltruoti nuo 1 iki 10

const marks2 = [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55];

const filteredMarks2 = marks2.filter(m => m >= 1 && m <= 10 && m % 1 === 0); 
console.log(marks2);
console.log(filteredMarks2);
// grazina    (10) [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55]
// grazina   (3) [10, 2, 8]

console.log('---------------------');
// uzduotis 4: palikti zodzius is didziosios raides

const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau','TAU'];
                                // galima paimti pirmo zodzio 1 raide ir ja padidinti, ir paimti 2 zodzio 1 raide ir ja padidinti
const isDiziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());
console.log(dictionary);
console.log(isDiziosios);
// grazina    (5) ["Labas", "rytas", "Lietuva", "sakau", "TAU"]
// grazina    (3) ["Labas", "Lietuva", "TAU"]


console.log('----------------REDUCE----------------------');

// REDUCE
// eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz.: jei turime pazymiu sarasa, tai eina per pazymius ir suskaiciuoja pazymiu suma total

// uzdavinys 1
const petriukoPazymiai = [10, 2, 8, 6, 4];

let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);
// grazina 50

const reducedPazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 20) 
                                        // ()parasyti funkcija kaip vykdoma logika
                                        // funkcija - kaupimo 
                                        // cia paz yra saraso kintamasis narys
                                        // cia 20 yra initial value
console.log(reducedPazymiai);
// grazina 50

console.log('---------------');

//uzdavinys 2 - koks gausis tekstas jei sujungsime visu zodziu pirmasias raides

const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau','tau'];

const short = dictionary2.reduce((total, word) => total + word[0],''); 
                                    // total reiksme yra pirmasis saraso narys t.y. total = dictionary2[0];
                                    // '' cia nurodo kad ieskomo kintamojo pradine reiksme yra '' t.y. tuscias kintamasis
console.log(short);
// jei nera '' grazina  LabasrLst
// jei yra '' grazina LrLst
