/* 
KINTAMUJU PALYGINIMAS 

IF STATEMENT:

logikos sablonai
if () {} 
if () {} else {} 
if () {} else if {}
if () {} else if {} ..... else if {}
if () {} else if {} ..... else if {}..... else {}

palyginimo operatoriai:
- visi: >, <, >=, <=, == (ar yra lygu?), != (ar NE lygu?), === (grieztas palyginimas), !== (grieztas Ne lygu palyginimas), ! (reiksme invertinantis operatorius)
- naudotini: >, <, >=, <=, ===, !==, ! ()
- nenaudotini: ==, != (nes tekstai nera tinkamas reiksmiu tipas)

loginiai operatoriai: && (and) , || (or) 
*/

//ar kazkuris yra didesnis ar mazesnis arba yra lygus arba mazenis/lygus arba didesnis/lygus
// logikos bloke aprasome visas salygas, jeigu ji yra tenkinama - bus atspausdinta, jei netenkinama - salygos blokas nevykdomas
// turi buti zodis 'if' tada () ir {}

const a = 7;
const b = 4;
if (a > b) {
    console.log(a, 'yra daugiau uz', b);
}
 
console.log('- - - - - - - - - - -');

const c = 7;
const d = 4;

if (c < d){
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('- - - - - - - - - - -'); 

const j = 8;
const r = 9;
if (j >= r) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('- - - - - - - - - - -'); 


// if ir if else yra skirtingi dalykai
// = yra reiksmes priskyrimo operatorius
// jei nori paklausi - ar yra lygu? tada rasomi ==

// NaN - Not a Number

// visi matematiniai veiksmai privalo buti atliekami tik skaiciaus tipo reiksmemis, todel visais atvejais stengsimes convertuoti is tekstines vertes i skaitine verte
// tam kad logika butu griezta, naudosime grieztus palyginimus ===
//   1 lyginami tipai: skaitinis ir tekstinis
// ! reiksme invertinantis operatorius

console.log('- - - - - - - - - - -');

const e = '89';
const f = 89;
if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('- - - - - - - - - - -');

const cookiesAgreed = false;
// ar sutikta su cookies? - ne nesutikta. Nes kintamojo pavadinimas yra teigiamas ty pozityvinis

if (cookiesAgreed === false){
    console.log('Ismetame cookies sutikimo bloka...1');

    //mintis tokia, jeigu zmogus buvo nesutikes su cookies, mes noresime pasakyti, kad 'ismetame cookies sutikimo bloka...1', jeigu bus = true, tada console nieko neismes
}

if (!cookiesAgreed){
// t.y. jeigu cookies Agreed = false, tai !cookiesAgreed = false irgi
    console.log('Ismetame cookies sutikimo bloka...2');
}
// abu pavyzdziai yra spausdinami :) 


console.log('- - - - - - - - - - -');

const userLoggedIn = false;
// ar vartotojas prisijunges? - ne

if (userLoggedIn) {
    console.log('Log out');
    // false = false, tada netenkina salygos ir eina prie else, ir bus isspausdinta "LOG IN" , nes ar prisijunges vartojokas = ne/false.
} else {
    console.log('Log in');
}

const user2LoggedIn = true;
// ar vartotojas prisijunges? - taip

if (user2LoggedIn) {
    console.log('Log out');
} else {
    // true = vartotojas yra prisijunges, vadinasi yra tenkina pirma salyga, ir bus isspausdinta "Log out".
    console.log('Log in');
}

console.log('- - - - - - - - - - -');
// nd Kintamuju palyginimas - 2 " Isvesti tekst9 kintamuju ilgius" t.y. = kaip suzinoti kiek raidziu sudaro teksta?
 
const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);
// isspausdins 9, jei po "pomidoras (tarpas)" isspausdins 10, nes tarpas irgi yra simbolis

console.log('- - - - - - - - - - -');

/* logikos sablonai
if () {} 
if () {} else {} 
if () {} else if {}
if () {} else if {} ..... else if {}
if () {} else if {} ..... else if {}..... else {}

*/

// else ifas
// if () {} else if {} .... else if {}

const akys = 'Melynos';

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else if (akys === 'Zalios') {
    console.log('Sexy'); 
} else if (akys === 'Rudos') {
    console.log('Melagis?');
} else if (akys === 'Pilkos') {
    console.log('Niekuo neypatingi...');
} else 
if (akys === 'Raudonos') {
    console.log('Programeris');
} else {
        console.log('A tu turi akis?');
    }
    // isspausdins "Oj kokie fainulkos!!!"

// NESTINIMAS - tai reiskia kai logika yra viduje
    if (akys === 'Melynos') {
        console.log('Oj kokie fainulkos!!!');
    } else {
        if (akys === 'Zalios') {
            console.log('Sexy');
        } else {  
            if (akys === 'Rudos') {
                console.log('Melagis?');
            } else {
                if (akys === 'Pilkos') {
                    console.log('Niekuo neypatingi...');
                } else { 
            console.log('A tu turi akis?');
                }
            } 
        }
    }
// spausdins 'Oj kokie fainulkos!!!' 

console.log('- - - - - - - - - - -');
// cia naudojamas else, BE else ifo 

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
}
if (akys === 'Zalios') {
    console.log ('Sexy');
} else {
    console.log('A tu turi akis?');
}
// spausdins 'Oj kokie fainulkos!!! ir 'A tu turi akis?' , nes yra if ir if ir else (bet ne else if)
// cia gaunasi kaip dvi atskiros logikos, viena su kita nesusijusios!!!!!!!!!

console.log('- - - - - - - - - - -');
// moketi pasakyti jeigu akys yra NE ZALIOS ir NE MELYNOS, ir NE RAUDONOS ir NE DAR KAZKOKIOS tada galima paklausti 'Ar tu turi akis?

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
}
if (akys === 'Zalios') {
    console.log ('Sexy');
}
if (akys === 'Rudos') {
    console.log ('Melagis?');
}
if (akys === 'Pilkos') {
    console.log ('Niekuo neypatingi...');
}
if (akys === 'Raudonos') {
    console.log ('Programeris?');
}
if (akys !== 'Melynos' && 
    akys !== 'Zalios' && 
    akys !== 'Rudos' &&
    // kai matoma paklausimo salygos, uz kiekvienos salygos kur yra && galima spausti enter 
    akys !== 'Pilkos' &&
    akys !== 'Raudonos') {
    console.log ('A tu turi akis?');
}
// spausdins: 'Oj kokie fainulkos!!!

/* Pratimas if'ams:
 išspausdinti patarimą ką su savimi pasiimti, kai:
- lauke šviečia / nešviečia saulė
- lyja / nelyja
- stovi vilkas / jo nėra
*/

if (akys !== 'Melynos' ||
    akys !== 'Zalios' ||
    akys !== 'Rudos' ||
    akys !== 'Pilkos' ||
    akys !== 'Raudonos') {
    console.log ('Tu turi vienas is man zinomu akiu spalvu');
}
// spausdins: 'Oj kokie fainulkos!!! ir 'Tu turi vienas is man zinomu akiu spalvu'

