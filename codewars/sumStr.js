
/*
https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
*/

/*function sumStr(a, b) {
    const pirmas = a === '' ? 0 : parseInt(a);
    const antras = b === '' ? 0 : parseInt(b);

    return '' + (pirmas + antras);
}

console.log(sumStr("4", "5"), '->', "9");
console.log(sumStr("34", "5"), '->', "39");
console.log(sumStr("", "5"), '->', "5");
console.log(sumStr("34", ""), '->', "34");
console.log(sumStr("", ""), '->', "0");
*/

// sukurti funkcija, kuri turi 2 teigiamus kintamuosius ir yra parasyta tekstu, paversti juos i skaicius, sudeti ir vel paversti tekstu ir isspausdinti rezultata

// is teksto reikia moketi pasiversti i skaiciu, nes matematiskai operuoti galiu tik su skaiciais

/* js string to "Number"  

parseInt ()   jis is tekstinio formato padaro skaitini
               bet jis grazina tik svaikaja skaiciaus dali (i maza puse)

parseFloat () is istraukia ir desimtaine dali
*/


Number()

function sumStr(a,b) {
  // return '9'; tada bandau return a + b  // bet cia skaiciai yra text, 
                                            //todel neveikia
    let pirmas = parseInt(a);       // is pradziu bandau pereiti i skaitini formata
    let antras = parseInt(b);       // pamatau kad '' reiksme NaN, tada

    if (isNaN(pirmas)) { // tada su isNaN konvertuoju i 0
        pirmas = 0;
    }

    if (isNaN(antras)) { // su isNaN konvertuoju i 0
        antras = 0;
    }

    return '' + (pirmas + antras); // grazina is skaitinio formato, i tekstin

}


console.log(sumStr("4","5"), '->', "9");
console.log(sumStr("34","5"),'->', "39");
console.log(sumStr("", "5"), '->', "5"); // tuscias tekstas konvertuojasi i 
                                        //NaN, as turi ji konvertuoti kaip nuli 0 
console.log(sumStr("34", ""), '->', "34");
console.log(sumStr("", ""), '->', "0");

// tuscias tekstas konvertuojasi i NaN, as turi ji konvertuoti kaip nuli 0 