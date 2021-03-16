// function pavadinimas (){ // pavadinimose galima naudoti tik _ arba visas mazasias raides ir kiekveina sudurtini zodzi rasyti Didziaja raide
// }


const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;

// const s = (a + b) * 10;
// console.log(s);

function desimteriopaSuma (pirmas, antras){
    const s = (pirmas + antras) * 10;
    console.log(s);
}
desimteriopaSuma(a, b);
console.log('----------');
desimteriopaSuma(c, d);
console.log('----------');
desimteriopaSuma(e, f);



// formule kaip apskaiciuoti rezultata, gali keistis, galbut is pirmo kart
// problemine vieta yra kiekis kiek ta pati per ta pati reiks rasyti
// norint supaparastinti gyvenima, reikia

// () gaunami parametrai su kuriais turesime dirbti (pirmas skaicius, antras skaicius)

// funkcija yra uzdara ekosistema. pvz restoranas = virtuve ir sale. ateina klientas ir uzsisako : as noriu kad man atnestum ta ir ana.. tada tas uzsakymas yra pateikiamas i virtuve. Funkcija yra receptas, o ingridientai yra pirmas (morka), antras (bulve)

function labas(vardas, amzius) {
    console.log(`Labas, as esu ${vardas} ir man yra ${amzius} metai.`);
}
labas('Petras', 88);
labas('Maryte', 77);





function reverseString(text) {

    let reverse = ''; //tuscias kintamasis

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}
console.log(text, '->', reverse);
}
const pirmasZodis ='Labas rytas';
reverseString(pirmasZodis);

reverseString('Lietuva');
reverseString('sedek uzu kedes');
reverseString('sula');
