/*
Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)

ATS:  Intervale nuo 10 iki 4 suma yra 10.

0 - 4           = 10
10 - 14         = 60
20 - 24         = 110
-50 - 50        = 0
0 - 100         = 5050
574 - 815       = labai didelis skaicius
-70 - 30        = santykinai didelis neigiamas skaicius (-2020)
0 - 0           = 0 
0 - 9999999999  = astronomiskai didelis skaicius

*/

const nuo = 0;
const iki = 9999999;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
        } else { ///salygu issakojimas, kad nuo mazesnio iki didesnio skaiciaus gerai skaiciuotu
            for ( let i = iki; i <= nuo; i++) {
            suma += i;
    }
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log(ats);

console.log(' - - - - - - - - - - -');

// jeigu mes turime du intervalus ir vienas is ju yra nuo didesnio link mazesnio, yra 

// !!!!!!!!!!!!vienas is variantu pries pradedant skaiciuoti, conts nuo ir iki skaicius sukeisti vietomis, kad pirmas butu mazesnis
//arba
// !!!!!!!!!!!tureti dvi logikas t.y. 2 ciklus, kuriu vienas  skaiciuoja  vieno tipo intervale, o kitas kito tipo intervale - tai reiskia ISSAKOTI SALYGAS