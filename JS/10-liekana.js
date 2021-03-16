/* 
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/


const nuo = -18000000;
const iki = 18000000;
const daliklis = 5;
let kiekis =0;

for ( let i = nuo; i <= iki; i++) {
   if (i % daliklis === 0){  // cia norima paklausti ar i skaiciaus liekana yra 0?
       kiekis++;
   }
}
const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);

// ar imanoma pagreitinti algoritma?



//su begalybe galima atlikti skaiciavimus, bet tai nera skaicius
/* 
Infinity     // teigiama begalybe
-Infinity    // neigiama begalybe


0 - 20          /5
0. 5, 10, 15, 20
i+= 5
i+= daliklis


11 20 /5
15, 20          (iki - nuo) / daliklis + 1
i += daliklis 

*/