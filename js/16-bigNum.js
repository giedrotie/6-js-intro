//ALGRITMAS SKIRTAS RASTI DIDZIAUSIA SVEIKA SKAICIU


function bigNum (list){
    // 1 input validation

    if (!Array.isArray(list)) { // budas labai konkreciai atpazinti /
                                //kad tai yra saras
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    /* if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    } (list === null) {
    } */

    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    // 2 logic
    let biggest = list[0];

    for (let i=1; i<list.length; i++) {

        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }
    }

    // 3  result
    return biggest;
}

//console.log(bigNum('pomidoras'));
//console.log(bigNum(4263));
//console.log(bigNum(true));
//console.log(bigNum(false));
//console.log(bigNum(undefined));
//console.log(bigNum());
//console.log(bigNum(bigNum));

//console.log(bigNum(null));
//console.log(bigNum({}));
//console.log(bigNum([]));


console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3 ] ),'->', 3);
console.log(bigNum([-5, 78, 14, 0, 18 ]),'->', 78);
console.log(bigNum([69, 69, 69, 69, 66 ]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-11, -2, -35, -4, -5, -6, -7, -8]), '->', -2);

/* ************************************ */