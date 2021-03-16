// function pavadinimas (){}

// function  Logikos SABLONAS su 
function pavadinimas (){    // pavadinimose galima naudoti tik _ arba 
                            //  visas mazasias raides ir kiekviena sudurtini 
}                           // zodi rasyti Didziaja raide 

const a = 8;       // const s = (a + b) * 10; norint padidint suma is x10
const b = 5;       // console.log(s);

const c = 99;
const d = 88;

const e = 2;
const f = 3;

function desimteriopaSuma (pirmas, antras){ //(nurodytos skaiciu poros)
    const s = (pirmas + antras) * 10; //^ cia sakoma, kad pirmu numeriu pvz a skaicius bus 'pirmas'
    console.log(s);
    console.log('----------');
    console.log(pirmas);
    console.log(antras);
}

desimteriopaSuma(a, b); // cia priskiriama 'pirmas' reiksme, a ir 'antras' b
console.log('----------');
desimteriopaSuma(c, d);  // duomenu perdavimas i funkcija 
console.log('----------');
desimteriopaSuma(e, f);


// formule kaip apskaiciuoti rezultata, gali keistis
// problemine vieta yra kiekis - kiek ta pati per ta pati reiks rasyti = yra DAUG
// turedami pradini duomenu rinkini (const a, const b, cost c ir tt) turime sukurti funkcija, kuri paimtu logika :   const s = (a + b) * 10
                      //         console.log(s);
//ir paverstu ja kaip sablona - ka daryti, kai man duos kazkokia pora skaiciu?

// gaunami parametrai su kuriais turesime dirbti (pirmas skaicius, antras skaicius)

// funkcija yra uzdara ekosistema. pvz restoranas = virtuve ir sale. ateina klientas ir uzsisako : as noriu kad man atnestum ta ir ana.. tada tas uzsakymas yra pateikiamas i virtuve. Funkcija yra receptas, o ingridientai yra pirmas (morka), antras (bulve)


console.log('----------');

function labas(vardas, amzius, vietovardis) { // vardas yra kintamojo pavadinimas
                                    // ^ be jokiu const ar let tiesiog pavadinimas
    console.log(`Labas, as esu ${vardas} ir man yra ${amzius} metai ir gyvenu ${vietovardis}.`);
}                                // ^ cia istatomi kintamieji 
labas('Petras', 88, 'Vilnius');  
labas('Maryte', 77, 'Kaunas');   // <- parametrai kuriuos priskiriu pavadinimui
labas ('Alphe', 5 , 'namie');

console.log('----------');

// paverskime  REVERSE CIKLA i funkcija: 

const pirmasZodis ='abcdef';

function reverseString(text) { // kai mano funkcija gaus bet koki teksta nesvarbu 
                                // koki zodi (text), 
let reverse = '';               //ji inicijuoja tuscia kintamaji - let reverse , 

for (let i = 0; i < text.length; i++) { //tada eina per ta duota teksta - per jo 
                                        //ilgi (text.length)
    reverse = text[i] + reverse;        //istraukineja raides text[i], sustato ten 
    console.log(text, '->', reverse);   //kur reikia (reverse)
    }   
}                                         // isspausdina i console

reverseString(pirmasZodis); //funkcijos iskvietimas // spausdina  abcdef ->fedcba
reverseString('Labas rytas'); //Labas rytas -> satyr sabaL
reverseString('Lietuva');   // Lietuva -> avuteiL
reverseString('sedek uzu kedes'); // 1sedek uzu kedes -> sedek uzu kedes
reverseString('sula'); // sula -> alus

console.log('----------');

/* f(x) = x*x;
function kvadratu(x) {
    console.log (x * x); //isspaus 25, 3025
}
kvadratu(5);
kvadratu(55);
*/
