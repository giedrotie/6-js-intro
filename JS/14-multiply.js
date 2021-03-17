function daugyba(a, b) {
    // parametru validacija
    // jeigu a yra ne skaicius, grazinti klaidos pranesima

    if (typeof a !== 'number'){ // jeigu, a yra ne skaicius
        return `Pirmasis parametras turi buti skaiciaus tipo`; 
                                // grazinti klaidos pranesima
    } 
     
  /* 
          // isNaN - Is not a Number - ty netikras skaicius , nes NaN - not a 
                                                                        Number 
    if (isNaN(a) || a === Infinity || a === -Infinity ) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`; 
    }
    */


/*  kitas var :

     if ('' + a === 'NaN' || Math.abs(a) === Infinity) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`; 
    }
    Math.abs(a) - absoliucios reiksmes funkcija
*/

     if (!isFinite(a)) { // skaitosi kaip - ar tai nera baigtine reiksme?
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`; 
    }

    if (typeof b !== 'number'){ // jeigu b yra ne skaicius, grazinti klaidos pranesima
        return `Antrasis parametras turi buti skaiciaus tipo`;
    }

    if (isNaN (b) || b === Infinity || b === -Infinity ) {
        return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`; 
    }

    //logika
    const rez = a * b;

    //rezultato grazinimas
    return rez;
} 


// SAVARTYNAS, NES JU ATSAKYMASYRA KLAIDOS PRANESIMAS

console.log(daugyba(true,false), '->', 15);      //Pirmasis parametras turi buti 
console.log(daugyba(3,false), '->', 15);        //skaiciaus tipo -> 15 
console.log(daugyba(false,5), '->', 15);      //-"-

console.log(daugyba('trys','penki'), '->', 15);      //-"-
console.log(daugyba(3,'penki'), '->', 15);      //-"-
console.log(daugyba('trys',5), '->', 15);      //-"-

console.log(daugyba(['asd', 786],3));
console.log(daugyba(3,['asd', 786]));
console.log(daugyba(['asd', 786],['asd', 786]));
console.log(daugyba(['asd'],3));
console.log(daugyba(3,['asd']));
console.log(daugyba(['asd'],['asd']));


console.log(daugyba (NaN,3));       // NaN, nes NaN reiksme yra number
console.log(daugyba (3, NaN));
console.log(daugyba (NaN,NaN));
// skaciu aibeje yra kategorijos: normalus skaiciai, NaN 

console.log(daugyba (Infinity, 3));
console.log(daugyba (3, Infinity));
console.log(daugyba (Infinity, Infinity));

console.log(daugyba (-Infinity, 3));
console.log(daugyba (3, -Infinity));
console.log(daugyba (-Infinity, -Infinity));

// **************************************************************

                   // a, b 
console.log(daugyba(4, 5), '->', 20);           // 20
console.log(daugyba(44, 5), '->',220);          // 220
console.log(daugyba(-44, -55), '->',2420);      // 2420
console.log(daugyba(-44, 55), '->',-2420);      // -2420
console.log(daugyba(-44, 0), '->', 0);          // -0 "->" 0
console.log(daugyba(0, 0), '->', 0);            // 0 "->" 0
console.log(daugyba(0, 54850), '->', 0);        // 0 "->" 0
console.log(daugyba(3.14, 2), '->', 6.28);      // 6.28 "->" 6.28
console.log(daugyba(3, 5), '->', 15);           // 15 "->" 15

// jeigu mes pamatome kad vartotojas iveda netinkamo formato duomenis turime grazinti vartotojui klaida
