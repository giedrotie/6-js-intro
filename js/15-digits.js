// Funkcija pavadinimu 'skaitmenuKiekisSkaiciuje'

function digits (skaicius) {
                    //1. patikrinti ar gauta informacija yra tinkamo tipo ar tekstinio ar skaitinio
                    // t.y. kintamojo validacija

                   
    if (typeof skaicius !== 'number') {  // tikriname kokio tipo kintamieji
    // pradzioje galima tiesiog uzklausti koks tipas: typeof skaicius 

        return 'ERROR: Turi buti skaiciaus tipas';
    }
   /* if ('' + skaicius === 'NaN'){ // tikriname NaN kokio tipo ar normalus?
                                    //galima rasyti if (isNaN(skaicius)) { }
        return 'ERROR: NaN nera normalus skaicius';
    }*/


    if (!isFinite(skaicius)) { // tikriname ar Infinity yra normalus skaicius
        return 'ERROR: Infinity nera normalus skaicius';
    }
                // arba viejog infinity ir NaN rasome viena komanda:
                // if (!isFinite(skaicius)) { 
                    // return `ERROR: ${skaicius} nera normalus skaicius;
                    //}


     // 2. logika
     const absoliutas = Math.abs(skaicius); //  (1) var sukuriamas absoliutas kad isvengti - konvertavima i 
                                                                                        //skaitmeni
     const tekstinisSkaicius = '' + absoliutas;  // cia is normalaus skaiciaus paverciu i tekstini;
                                    //galima rasyt const tekstinisSkaicius = skaicius.toString ();
     let skaitmenuKiekis = tekstinisSkaicius.length;

     // jei skaicius turi desimtaine dali, tai sumaziname 1 vientetu
     if (skaicius % 1 !== 0 ){
         skaitmenuKiekis--;    // cia eliminuojamas kablelis
     }

     /* (2) var jei skaicius yra neigiamas, tai sumaziname 1 vienetu
     if (skaicius < 0) {
         skaitmenuKiekis --;
     }*/

    // 3. return result
    return skaitmenuKiekis
}


console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits( ));
console.log(digits(undefined));
console.log(digits(null)); // null kaip reiksme ypatingas tuo, kad simbolizuoja 
                        //'informacijos neturejima' bet as zinau kad tokia informacija yra imanoma ir galbut as ja kada nors gausiu

console.log(digits([]));
console.log(digits(''));
console.log(digits([4624]));
console.log(digits);


// skaicius, priesingai negu tekstas neturi savo baigtinio ilgio t.y. skaicius.length neegzistuoja


console.log( digits( 5 ), '->', 1);
console.log( digits( 781 ), '->', 3 );
console.log( digits( 37060123456 ),'->',11 );
console.log( digits( 3.1415),'->', 5);  // skaicius su liekana
console.log( digits(-456),'->', 3); // su minusu, iskaiciuoja - kaip skaitmeni
//^ vienas is budu yra sukurti absoliutine skaiciaus reiksme
console.log( digits(-3.7654),'->', 5); // su minusu, iskaiciuoja - kaip skaitmeni

// ***** nenormalus / lb reti / atvejai 

// isijungia tikrasis skaiciavimas
// skaiciai isreiskiami sktandartine matematine israiska

console.log( 'Koks sorendimas norint rasti standartinnes skaiciaus israiskos "turimu" skaitmenu kieki?');
console.log( digits(100000000000000000000000000000000),'->', 30); // su lb dideliu skaitmeniu
console.log( digits(100000000000000000000000000000000000000000000),'->', 51); // su lb dideliu skaitmeniu jie isreiskiami skaicius matematine israiska   1e+50
// 1e+50 = 1 * 10 (penkesdesimtuoju);




//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
