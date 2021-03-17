function century(year) {
   
    return Math.ceil(year / 100);
}




 /* ******************** kitas sprendimo budas ***********************
 */ 

 // 1. amzius is esmes yra metai / 100

 function century(year) {
     
    let amzius = year / 100;
    console.log(amzius);

    //  2. reikia suapvalinti kad neliktu po kablelio liekanos
    
    amzius = Math.floor(amzius);

    // 3. jeigu egistuoja dalybos liekana, yra +1 amzius
    // jei liekana yra 0, jis lieka toks pat
    if (year % 100 > 0) {
        amzius++;
    }
    return amzius;
}


console.log(century(1705), '->', 18);
console.log(century(1900), '->', 19);
console.log(century(1601), '->', 17);
console.log(century(2000), '->', 20);
console.log(century(89), '->', 1);



// apvalinimas 

/*
Math.floor - apvalina  priverstinai i apacia(numeta VISKA KAS YRA PO KABLELIO)

Math.ceil - apvalinimas i priverstinai i virsu iki sveikos dalis

Math.round - apvalinimas pagal matematine taisykle konkriai 0.5 apvalina i virdu
*/



let amzius = year / 100;

amzius = Math.floor(amzius);
if (year % 100 > 0) {
    amzius++;
return amzius;
}