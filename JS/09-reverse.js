/* panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/

const text ='abcdef';
let reverse = '';

// for ( let i=0; i < text.length; i++) {
//    console.log(i, text[i]);
//   reverse += text[text.length - 1 - i];
// }


for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}


console.log(text, '->', reverse);

/*
0 -> 5
1 -> 4
2 -> 3      texto ilgis - 1 -2
*/



/*
for ( let i = text.length; i > 0; i--) {
    reverse += text[i];
}
console.log(text, '->', reverse); */

/*
for ( let i = text.length; i > 0; i--) {
    reverse += text[i - 1];
}
console.log(text, '->', reverse); */