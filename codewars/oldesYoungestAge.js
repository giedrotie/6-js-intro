// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
    let oldest = ages[0];

    for (let o = 0; o < ages.length; o++){
        if (oldest < ages[o]) {
            oldest = ages[o];
        }
    }

    let youngest = ages[0];

    for (let y = 0; y < ages.length; y++){
        if (youngest > ages[y]) {
            youngest = ages[y];
        }
    }
        
    return [youngest, oldest, oldest - youngest]

}
    


//console.log(differenceInAges(ages), '->', [youngest, oldest, diference]);
console.log(differenceInAges([82, 15, 6, 38, 35]), '->', '[6, 82, 76]');
console.log(differenceInAges([57, 99, 14, 32]), '->', '[14, 99, 85]');

// with a FOR loop
// using the reduce() method
// using Math.max(