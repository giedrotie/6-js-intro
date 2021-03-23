// iprasta funkcija suma

function suma(a, b){
    return a + b;
}
const atsSuma = suma(8,5);
console.log(atsSuma);

// iprasta funkcija atimtis

function atimtis(a, b) {
    return a - b;
}
const atsAtimtis = atimtis(8,5);
console.log(atsAtimtis) */

/* ************************ */ 
// BEVARDES FUNKCIJOS priskirimas kintamajam 

const atimtis = function (a, b) {
    return a - b;
}
const atsAtimtis = atimtis(8,5);
console.log(atsAtimtis);


/* ************************ */ 
// RODYKLINES FUNKCIJOS

// arrow function priskirimas kintamajam 

const daugyba = (a, b) => {  // cia kas yra duota // => iterpiamas nes istrintas zodis function
    return a * b; // logikos blokas
}
const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

console.clear();


// arrow function priskirimas kintamajam 
// jeigu logika turi tik viena procedura, tai galima nerasyti {} ir return

const dalyba = (a, b) => a / b; //kiantamajam priskiriama logika
                        // uz => ka funkcija turi grazinti 
const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);


// arrow function priskirimas kintamajam 
// jeigu logika turi tik viena procedura, tai galima nerasyti {} ir return
// jeigi parametru yra tik 1, tai galima nerasyti ()

const kvadratu = a => a * a; 
                    
const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);


/* ************************ */ 
/* ************************ */ 
/* ************************ */ 


 const vardas = 'Vardenis';

function pirmaRaide(name) {
    return name[0];
}
const raide = pirmaRaide(vardas);
console.log(raide); 

/* ********** modifikacija ************** */ 

 const vardas = 'Vardenis';

const pirmaRaide = function (name) {
    return name[0];
}
const raide = pirmaRaide(vardas);
console.log(raide); 

/* **********  2 modifikacija ************** */ 

const vardas = 'Pedro';

const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.length - 1];

const raide = pirmaRaide(vardas);
const paskutine = paskutineRaide(vardas);

console.log(raide);
console.log(paskutine);

