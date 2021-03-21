//ALGRITMAS SKIRTAS RASTI DIDZIAUSIA SVEIKA SKAICIU
// gali buti ir maziausias skaicius sarase

function bigNum (list){
    // 1 input validation ///////////// isitiktinti ar tinkamas tipas

    if (!Array.isArray(list)) { // budas labai konkreciai atpazinti / paklausti
                                //ar tai yra sarasas? // priciumpa ir null is
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    
    /*      if (typeof list !== 'object') { // nes typeof grazina 'object'
            return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
            }                                   */

    /* ********    null === null, o NaN !== NaN **********

    /*      if (list === null) {
             return 'ERROR: netinkama reiksme (null)' 
            }                                       */

    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    // 2 logic ////////////////////////////////

/*  ********************* algoritmas sskirtas  rasti didziausia normalu skaiciu */

   /* let biggest = list[0]; // jeigu iki atejau, vadinasi saras yra ne tuscias
                            // tada galiu uzsirasyti kad nulinis kintamasis sarase potencialiai yra didziausias

    for (let i=1; i<list.length; i++) {
        const number = list[i];
                            // ar jis didesnis uz jau zinoma didziausia skaiciu?
        if (number > biggest) {
            biggest = number;
        }      */     

/*  ********************* cia budas jei sarase duoti nenormalus skaiciai  */
/*  ********************* cia budas jei sarase duoti nenormalus skaiciai  */
/*  ********************* cia budas jei sarase duoti nenormalus skaiciai  */

    let biggest = -Infinity;    // nes kad ir koks neigiamas didziausias skaicius, 
                                //jis vistiek yra maziau uz -Begalybe !!!!!!!!!!

    for (let i=0; i<list.length; i++) {
        const number = list[i];

    // ar tai normalus skaicius? ar jis skaiciaus tipo?
        if(typeof number !== 'number' || !isFinite(number)) {
        continue; // eina i sekancia ciklo iteracija
    }
    // ar jis didesnis uz jau zinoma didziausia skaiciu?
        if (number > biggest) {
            biggest = number;  
        }                 ;
          
    }
    // 3 logic validation !!!!!!!!!!!!!!!!!!!!!!!!!!
    // norime pasitikrinti ar teisingai skaiciuoja
    if (biggest === -Infinity) {
        return 'ERROR: sarase nerastas nei vienas normalus skaicius'
    }

    // 4 result
    return biggest;
}

//console.log(bigNum('pomidoras')); // string
//console.log(bigNum(4263)); // number
//console.log(bigNum(true)); // boolean
//console.log(bigNum(false)); // boolean
//console.log(bigNum(undefined)); // undefined
//console.log(bigNum()); 
//console.log(bigNum(bigNum));

//console.log(bigNum(null)); // typeof null --> "object"
//console.log(bigNum([])); // typeof []   --> "object"
//console.log(bigNum({})); // typeof {} --> "object" - TY TIKRASIS OBJEKTAS


console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3 ] ),'->', 3);
console.log(bigNum([-5, 78, 14, 0, 18 ]),'->', 78);
console.log(bigNum([69, 69, 69, 69, 66 ]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-11, -2, -35, -4, -5, -6, -7, -8]), '->', -2);



console.log(bigNum([1, 8, 3, 5, Infinity]), '->', 8);
console.log(bigNum([1, 8, Infinity, 3, 5]), '->', 8);
console.log(bigNum([Infinity, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, 'pomidoras']), '->', 8);
console.log(bigNum([1, 8, 'pomidoras', 3, 5]), '->', 8);
console.log(bigNum(['pomidoras', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, true]), '->', 8);
console.log(bigNum([1, 8, true, 3, 5]), '->', 8);
console.log(bigNum([true, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, null]), '->', 8);
console.log(bigNum([1, 8, null, 3, 5]), '->', 8);
console.log(bigNum([null, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, undefined]), '->', 8);
console.log(bigNum([1, 8, undefined, 3, 5]), '->', 8);
console.log(bigNum([undefined, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, NaN]), '->', 8);
console.log(bigNum([1, 8, NaN, 3, 5]), '->', 8);
console.log(bigNum([NaN, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, '']), '->', 8);
console.log(bigNum([1, 8, '', 3, 5]), '->', 8);
console.log(bigNum(['', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([Infinity, null, 'sads', true, 888]), '->', 888);
console.log(bigNum([Infinity, null, 888, 'sads', true]), '->', 888);
console.log(bigNum([888, Infinity, null, 'sads', true]), '->', 888);

console.log(bigNum(['888', Infinity, null, 'sads', true]));

// recursion
console.log(bigNum([-5, 78, [14, 999], 0, 18]), '->', 999); 
