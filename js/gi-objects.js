const mokykla = [
    ['Jonukas', [10,2]],
    ['Mariukas', [2,7]]
];

// [vardas, pazymiai, megstamos raides, kiek deinu gyvena, ar nori eiti i PC, ar siemet maudesi]
const mokinys = ['Jonukas', [10,2], 'asf', 6478, true, false]
const vardas = mokinys [0];
const pazymiai = mokinys [1];

/* ******************* */
// formatas {} - objektu sarasas
    // key: value      //key buna isvardinti abeceles tvarka
                        // objekte 'key' dazniausiai yra tekstinis

const student = {
    vardas: 'Petras', //console.log(student['vardas]);
    pazymiai: [10, 2], //console.log(student['megstamosRaides']);
    megstamosRaides: 'asf',
    kiekDienuGyvas: 5485,
    arNoriIPc: true,
    arSiemetMaudesi: false,  
    tevai: {
        motina: { 
            vardas: 'Onute',
            telNr: 4485621559,
            amzius: 55
        },
        tevas: {
            vardas: 'Jonas',
            telNr: 4485621559,
            amzius: 55
        }
    },
    aplankytosVietos: [
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: true
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: false
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGidu: true
        },
    ]
}

console.log(student);

console.log('-------------');

// Universalus info istraukimas is objekto
console.log(student['vardas']);
console.log(student['megstamosRaides']);
console.log(student['arNoriIPc']);
console.log(student['arSiemetMaudesi']);
console.log(student['pazymiai']);
console.log(student['pazymiai'][0]);
console.log(student['pazymiai'][1]);
console.log(student['tevai']);
console.log(student['tevai']['motina']);
console.log(student['tevai']['motina']['vardas']);

console.log('-------------');

// Supaprastintas info istraukimas is objekto
console.log(student.vardas);
console.log(student.megstamosRaides);
console.log(student.arNoriIPc);
console.log(student.arSiemetMaudesi);
console.log(student.pazymiai);
console.log(student.pazymiai[0]);
console.log(student.pazymiai[1]);
console.log(student.tevai);
console.log(student.tevai.motina);
console.log(student.tevai.motina.vardas);