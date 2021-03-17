function century(year) {
   
    return Math.ceil(year / 100);
}


/*  //amzius is esmes yra metai / 1000

    let amzius = year / 100;
    console.log(amzius);
    //  reikia suapvalinti akd neliktu po kablelio liekanos
    amzius = Math.floor(amzius);

    // jei egistuoja dalybos liekana, yra sekantis +1 amzius
    // jei liekana yra 0, jis lieka
    if (year % 100) {
        amzius++;
    }
    return amzius;
*/


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