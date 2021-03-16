//Kintamuju palyginimas - jei rezultatas tenkina palyginimo salyga, console isvesti "Pomidoras", o jei salyga nera tenkinama, isvesti sakini "Bandykite dar karta"
//1

const pirmas = 9;
const antras = 2;

console.log(pirmas);
console.log(antras);

console.log('- - - - - - - - - - -');

//a, kuris yra didesnis

if (pirmas > antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// spausdina Pomidoras

console.log('- - - - - - - - - - -');

//b, kuris mazesnis

if (pirmas < antras) {
    console.log ('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// nespausdina  bandykite dar karta

if (antras < pirmas) {
    console.log ('Pomidoras');
}
// spausdina 2 "yra maziau uz" 9

console.log('- - - - - - - - - - -');

//c ar jie lygus

if (pirmas === antras) {
    console.log (pirmas, 'yra lygu', antras);
}
// nespausdina

console.log('- - - - - - - - - - -'); 
// d ar jie nelygus 

if (pirmas === antras) {
    console.log (pirmas, 'yra lygu', antras);
} else {
    if (pirmas !== antras) {
        console.log (pirmas, 'yra NE LYGU', antras);
    }
}
// spausdina 9 yra NE LYGU 2 

console.log('- - - - - - - - - - -');
// e kuris didesnis arba lygus

if (pirmas >= antras) { 
console.log(pirmas, 'yra daugiau arba lygu', antras);
}
// spausdina 9 " yra daugiau arba lygu" 2

console.log('- - - - - - - - - - -');
// f kuris mazesnis arba lygus

if (pirmas <= antras) {
    console.log(pirmas, 'maziau arba lygu', antras);
} else {
    if (antras <= pirmas) {
        console.log(antras, 'maziau arba lygu', pirmas);
    }
}
// spausdina 2 "maziau arba lygu" 9
//arba

if (antras <=pirmas) {
    const antrasMaziauLyguPirmas = `${antras} yra maziau arba lygu uz ${pirmas}`;
    console.log(antrasMaziauLyguPirmas)
}
// spausdina 2 yra maziau arba lygu uz 9

if (pirmas >= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// spausdina Pomidoras

console.log('- - - - - - - - - - -');
console.log('- - - - - - - - - - -');
console.log('- - - - - - - - - - -');
// 2 isvesti teksto tipo kintamuju ilgius 

const ilgiausiasZodis = 'nebepasikiskiakopusteliaudamasis';
const ilgiausioZodzioIlgis = ilgiausiasZodis.length;
console.log(ilgiausioZodzioIlgis);
// spausdina 32

const azuolas = 'medziukaraliusazuolas';
const azuoloIlgis = azuolas.length;
console.log(azuoloIlgis);
// spausdina 21

console.log('- - - - - - - - - - -');
console.log('- - - - - - - - - - -');
console.log('- - - - - - - - - - -');
// 3 tarpusavyje palyginti teksto tipo kintamusu ilgius 

// a kuris didesnis/ilgesnis
const tekstas1 = 'nebepasikiskiakopusteliaudamasis';
const tekstas2 = 'kopustelis';
const tekstas1Ilgis = tekstas1.length;
const tekstas2Ilgis = tekstas2.length;

if (tekstas1Ilgis > tekstas2Ilgis) {
    console.log(`${tekstas1} zodis ilgesnis uz zodi ${tekstas2}`) ||
    console.log('Pomidoras');
}
// spausdina nebepasikiskiakopusteliaudamasis zodis ilgesnis uz zodi kopustelis ir kitoje eiluteje Pomidoras
console.log('- - - - - - - - - - -');

// b kuris mazesnis/trumpesnis

if (tekstas1Ilgis < tekstas2Ilgis){ 
    console.log('Pomidoras')
  } else { 
    console.log ('Bandykite dar karta');
  }
  // spausdina Bandykite dar karta

  console.log('- - - - - - - - - - -');
// c ar jie lygus

if (tekstas1Ilgis === tekstas2Ilgis) {
    console.log('Pomidoras');
} else if (tekstas1Ilgis !== tekstas2Ilgis) {
 console.log('Bandykite dar karta');
}
 // spausdina Bandykite dar karta
 if (tekstas1Ilgis === tekstas2Ilgis) {
    console.log('Pomidoras');
} else if (tekstas1Ilgis !== tekstas2Ilgis) {
 console.log(`zodzio ${tekstas1} ilgis yra NE LYGU zodzio ${tekstas2} ilgiui`);
}
// spausdina zodzio nebepasikiskiakopusteliaudamasis ilgis yra NE LYGU zodzio kopustelis ilgiui

console.log('- - - - - - - - - - -');
// d kuris didesnis arba lygus

if (tekstas1Ilgis >= tekstas2Ilgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// spausdina Pomidoras

console.log('- - - - - - - - - - -');
// d kuris mazesnis arba lygus

if (tekstas1Ilgis <= tekstas2Ilgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

 console.log('- - - - - - - - - - -');
// 4 Isvesti saraso tipo kintamuju ilgius

const laimingiSkaiciai = [10, 27, 33, 66];
const nelaimingiSkaiciai = [11, 3, 5, 21, 18];

const laiminguSkaiciuKiekis = laimingiSkaiciai.length;
const nelaiminguSkaiciuKiekis = nelaimingiSkaiciai.length;
console.log(laiminguSkaiciuKiekis);
console.log(nelaiminguSkaiciuKiekis);
// raso 4 kitoje eiluteje 5

console.log('- - - - - - - - - - -');
// 5 Palyginti saraso tipo kintamuju ilgius
// a kuris yra didesnis

if (laiminguSkaiciuKiekis > nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// raso Bandykite dar karta 

console.log('- - - - - - - - - - -');
// 4 Isvesti saraso tipo kintamuju ilgius

//b kuris yra didesnis
if (laiminguSkaiciuKiekis < nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// raso Pomidoras

console.log('- - - - - - - - - - -');
// c ar jie lygus?

if (laiminguSkaiciuKiekis === nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// raso Bandykite dar karta 

console.log('- - - - - - - - - - -');
// d ar jie NE lygus?
if (laiminguSkaiciuKiekis !== nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// raso Pomidoras

console.log('- - - - - - - - - - -');
// e kuris mazesnis arba lygus?

if (laiminguSkaiciuKiekis >= nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else{
    console.log('Bandykite dar karta');
    }
    // raso Bandykite dar karta 

    console.log('- - - - - - - - - - -');
// e kuris mazesnis arba lygus?

if (laiminguSkaiciuKiekis <= nelaiminguSkaiciuKiekis) {
    console.log('Pomidoras');
} else{
    console.log('Bandykite dar karta');
    }
    // raso Pomidoras