// pagal duota skaiciu reikia grazinti neigiama jo reiksme

function makeNegative(num) {  // 
    // 3.  console.log(num);
   //       return num * -1;
   if (num < 0 ) {              // 4. yra salyga jei tas gautas skaicius num yra < 0, tai ir 
                                //garzink ta skaiciu, nes jis jau ir taip yra  neigiamas
        return num;
   }
    return num * -1;               //5. arba priesingu atveju padaugink is -1;
    
}

console.log(makeNegative(42), '->', -42);
// 1. as tikiuosi kad iskvietus funkcija ir davus jai42, as tikiuosi kad ji isspausdins -42
// pradzioje rezultatas undefined -> -42, nes pradzioje default reiksme return undefined
// 2. reikia pasirasyti daugiau testu
// 3. tada reikia pasiziureti ak as gaunu su console.log(num)

console.log(makeNegative(42), '->', -42);
console.log(makeNegative(9), '->', -9);
console.log(makeNegative(-5), '->', 5);
console.log(makeNegative(3.14), '->', -3.14);
console.log(makeNegative(0), '->', 0);

/* ******************** kitas sprendimo budas  su if else ***********************
*/

function makeNegative(num) {  // 
    
   if (num <= 0 ) {             
        return num;
   } else {
         return -num;  // ARBA return num * -1
   }
}

/* ******************** kitas sprendimo budas su ternary operatorium ***********************
*/

function makeNegative(num) {  
    return num <= 0 ? num : -num;
}
 
 /* ******************** kitas sprendimo budas ***********************
 */

// jeigu pas mus i uzklausima yra duodamas tiesiog skaicius 

function makeNegative(num) {  
    return -Math.abs(num);
}
 
 /* ******************** kitas sprendimo budas ***********************
 */