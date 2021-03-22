//https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript
// susumuoti visus skaicius esancius sarasauose
// pirma suma =0
// antra einame per sarasus, sukuriame kintamaji saraso itaji nari


function arraySum(arr) {
    let sum = 0;
    let childSum = 0;

    for (let i = 0; i < arr.length; i++){
        const child = arr[i];

        if (Array.isArray(child)){
            sum += arraySum(child)
        } else if (Number.isFinite(child)){
            sum += child
        }

    }

    return sum;

}

console.log(arraySum([1, 2]), '->', '3');
console.log('----------');
console.log(arraySum([1, 2, 3]),'->', '6');
console.log('----------');
console.log(arraySum([1, 2, [1, 2]]),'->', '6');
console.log('----------');


/* ************ kitas var **************** */

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += arraySum(arr[i]);
      } else if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
    return sum;
  }