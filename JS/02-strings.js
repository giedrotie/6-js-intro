/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU
*/

// Siandien yra: Kovo desimta. (pavyzdys kai galima sujungti sakinius is askiru daliu)
const menuo = 'Kovo';
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

// Cia yra dviguba (") kabute.
const dvigubaKabute = 'Cia yra dviguba (") kabute.';
console.log(dvigubaKabute);

// Cia yra vienguba (') kabute.
// * jei mes sakome kad tekste reikia atvaizuoti kazkokio tipo kabutes, tada tas tekstas turi buti inicijuotas priesingo tipo kabute
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

// Turiu vienguba (') ir dviguba (") kabutes.
// * reikia JavaScriptui psakyti kad kabute nera teksto uzbaigimo dalis. reikia pries kabute padeti \ "backslash" (t.y. simboliu escape - ignoravimas, kad jis veiktu ne kaip kodo dalis o veiktu kaip turinio dalis)
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes.";
console.log(viengubaDviguba);

// Turiu dviguba (") ir vienguba (') kabutes.
const dvigubaVienguba = 'Turiu dviguba (") ir vienguba (\') kabutes.';
console.log(dvigubaVienguba);

// Max saugumas dviguba (") ir vienguba (') kabutes.
// * escape visas kabutes, kurios norima atvaizdtuoti kaip teksta.
const maxKabutes = 'Max saugumas (\") ir vienguba (\') kabutes.';
console.log(maxKabutes);

// kiekvienoje eiluteje, kuri neuzbaigia teksto reikia padeti "\" backslasha!
const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
console.log(navHTML);

console.log('- - - - - - - - - - -');

// Mano vardas: Petras.
const vardas1 = 'Petras';
const petrasIntro = 'Mano vardas: ' + vardas1 + '.';
console.log(petrasIntro);

// stebuklingos kabutes - backtick (`) simbolis
// isvada: yra keli budai kurti ir inicijuoti teksta ir ' ir " yra vienas is variantu. Kitas variantas yra ` (backtikuose).
// jei tekstas aprasomas tik ``  tada galima naudoti template literals
// template literals ${ }   <--- iterpiama reiksme i norima vieta

const petrasBacktick = `Mano vardas: ${vardas1}.`;
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 7, 2];

const markSentence1 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence1);

const markSentence2 = `Antras pazymys: ${marks[1]}.`;
console.log(markSentence2);

const markSentence = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(markSentence);

// backtikai `` leidzia tureti tvarkinga vaizda su enteriais be backslashu \ !!!!
const navHTML2 = `<nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                <a href="#">Link</a>
                </nav>`;
console.log(navHTML2);
