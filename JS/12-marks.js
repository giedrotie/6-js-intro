function pazymiuVidurkis(vardas, pazymiai){
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    const average = suma / pazymiai.length;

    // Vardenis: pazymiu vidurkis yra 6.
    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`)
}               // Petriukas: pazymiu vidurkis yra 6.
                // Maryte: pazymiu vidurkis yra 9.
                // Alphe: pazymiu vidurkis yra 7.

pazymiuVidurkis('Petriukas', [10, 2, 8, 4]); // 'vardas', [pazymiu, array]
pazymiuVidurkis('Maryte', [10, 9, 10, 7, 9, 10, 8]);
pazymiuVidurkis('Alphe', [10, 8, 6, 4]);

console.log('-----------------------------------------');
const mokykla = [     // kas yra mokykla? - sarasras, kuri sudaro
    ['Rokas', [10, 2, 8, 4]],    // mazi sarasiukai pazymiu
    ['Onute', [10, 8, 6, 4]],        
    ['Vilius', [10, 9, 10, 7, 9, 10, 8]]
];
console.log(mokykla);   

for (let i = 0; i < mokykla.length; i++) {
    
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    console.log(mokinys[0]);
    console.log(mokinys[1]);

    pazymiuVidurkis(name, marks);
//= pazymiuVidurkis(mokykla[i][0], mokykla[i][1]);

}