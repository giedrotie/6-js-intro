/*

FOR LOOP (ciklas): 

for () {}

for - nurodyta koki funkcionaluma norime daryti
() - parametrai kaip tai daryti, jeigu apskritai daryti
{} - logikos blokas, ka daryti kiekvieno ciklo arba tiksliau kiekvienos ITERACIJOS metu 

*/

const rytas= [ 'r', 'y', 't', 'a', 's'];
let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];

console.log(zodis);

console.log(' - - - - - - - - - - -');

for (let i=0; i < 5; i++){
    console.log(i); // isspausdina 0 1 2 3 4 
}
console.log('ciklo pabaiga');

// kiek kartu suktis? kiek kartu ta pati procesa reiks kartot ir kartot ir kartot? - ciklas turi atmintyje kelintas tai ratas ir vis skaiciuoja 

// i=0 -> pagal nutylejima prima dalis pries kabliataski // vietoj i gali buti belokia kita raide ar zodis

// i = kintamasis skirtas ciklo ITERACIJU KIEKIUI STEBETI/

// i<5 yra salyga, kuria tenkinant ITERACIJA gali buti vykdoma t.y. tol kol i < 5, iteracija cikle 'for' bus leidziama 

// i++ sako padidink skaiciu vienu 1, todel prasisukus vienam ratui (kai gaunamas 0), buvo gauta 1, po to prasisuko dar syki gavo 2 ir tt

// kai isspausdino 4, ir padare dar viena cikla, gavo 5, o 5 nera maziau uz 5, ty netenkina salygos, todel ciklas baige darba

console.log(' - - - - - - - - - - -');

for (let g = 3; g <= 7; g++) {
console.log(g); // spausdina 3 4 5 6 7 (imtinai!!!!, nes <=)
}
console.log('ciklo pabaiga'); // spausdina ciklo pabaiga


 console.log(' - - - - - - - - - - -');

 const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

 for (let i=0; i < abc.length; i++) {
                           //console.log('abc');
                          //spausdintu 6 x abc , nes 6 yra saraso ilgis

     const raide = abc[i];
     console.log(raide); // spausdina a b c d e f 
 }



  console.log(' - - - - - - - - - - -');

  const zmones = ['Petras', 'Maryte', 'Jurgis', 'Onute', 'Elvyra'];
  
  for (let i=0; i < zmones.length; i++) {     
    const vardas = zmones[i]; // kintamuju pavadinimai yra reliatyvus 
                            // dalykas vardas kodo skaitomumo, i tema turi buti pavadninimas
    console.log(vardas);    // spaus:  Petras Maryte Jurgis Onute Elvyra
}

console.log(' - - - - - - - - - - -');
// norint apskaiciuoti vidurki, pirmiausia reikia suskaiciuoti sarase esanciu skaiciu suma
// norint suskaiciuoti suma yra ciklas
// ciklas yra pasikartojanciu operaciju rinkinys,
// pasikartojanti operacija yra: paimk kiekviena skaiciu is saraso nari, tik sekanti sekanti sekanti ir vis prisimuok prisumuok prisumuok
//= paimk sekanti nari ir prisumuok X n kartu t.y. pasikartojantis operatorius

const marks = [5, 7, 10, 4, 2, 10, 8 ];
let sum = 0;

for (let i = 0; i < marks.length; i++) { // suksis tol kol baigsis 
                                        //saraso ilgis mark.length
                                        // naudoju marks.lenght nes  noriu kad visus saro skaicius itrauktu i operacija 
    const pazymys = marks[i];  // pazymys uzsivadinu kintamaji
    
    // ciklas ejo ratu per pazymius, kiekviena kart issitraukdamas vis nauja pazymi ir ji vis prisumavo prie sum kintamojo
   
     /* console.log(marks[i]);  //kiek bus saraso nariu, tiek isspausdins
                               // klausimas ka as noriu suzinoti?  
                               // ^ 1. noriu  visus saraso narius, issispausdinti panariui */
    sum +=  pazymys;           // sum = sum + pazymys; 

    console.log(pazymys, sum); // isspausdia kiekviena pazymi ir suma

}

const average = sum / marks.length;
console.log (sum, '/', marks.length, '=', average); // 46 "/" 7 "=" 6.57

/*                   // vietoj 
const pazymys = marks[i]; 
sum +=  pazymys;     //galima rasyti tik
*****************
sum += marks[i];
*****************
*/


/* *************EJIMAS PER SARASA:******************** 

 for (let i=0; i < marks.length; i++) { 
     console.log(marks[i]);   <- kreipimasis i saraso i-taji nari
                              <- i gali buti bet koks zodis ar simbolis
 }
 * *************************************************** */