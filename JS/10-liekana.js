/* 
LIEKANA - REMAINEDER

Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie 
dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/
/* - ka cia reikia padaryti?
 mes turime kazkoki skaiciu intervala imtinai norime ji padalinti is kazkokio skaiciaus, kad padalijus is to daliklio atsakymas butu be liekanos sveikas skaicius. */


const nuo = -18;
const iki = 18;
const daliklis = 7; // koks daliklis
let kiekis = 0; /// kelis kartus dalijasi be liekanos

// kaip paklausti AR TAI YRA SVEIKASIS SKAICIUS? - be liekanos

for ( let i = nuo; i <= iki; i++) {
   if (i % daliklis === 0){  // pradzioje galima !!!!!!  console.log(i, i/daliklis);
       kiekis++;             // js operatorius % (modulus / division remainder
   }                         //cia norima paklausti ar i skaiciaus liekana yra 0?
}                            // iskeliama salyga su IF jeigu i % daliklis yra = 0, tai 
                            // tada kiekis++, nes pradinis kiekis = 0, o ++ padidina kintamaji vienu vienetu 

const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);


//su begalybe galima atlikti skaiciavimus/matematikas, bet tai nera skaicius
/* 
Infinity     // teigiama begalybe
-Infinity    // neigiama begalybe

// NIUNSAS , jei uzdavinyje turesime labai didelius skaicius
 algoritma galima pagreitinti, padarant cikla efektyvesniu

0 - 20          /5
0, 5, 10, 15, 20
i+= 5
i+= daliklis


11 - 20 /5  
15, 20      (iki - nuo) / daliklis + 1 
          //cia reikia pirma skaiciu parasyti 
            artimiausia kuris dalinasi be liekanos   
i += daliklis 
*/