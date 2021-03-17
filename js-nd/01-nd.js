 // Namu darbai 2021 03 09

// Kintamuju inicijavimas
// 1 kintamieji su skaiciaus tipo reiksmemis
const vienas = 1;
const du = 2;
const trysSuBiskiu = 3.2;

console.log(vienas);
console.log(du);
console.log(trysSuBiskiu);

//2 kintamieji su teksto tipo reiksmemis
const pirmasTekstas = 'Pirmas tekstas';
const antrasTekstas = 'Antras tekstas';
const treciasTekstas = 'Trecias tekstas';

console.log(pirmasTekstas);
console.log(antrasTekstas);
console.log(treciasTekstas);

//3 sarasas su 5 skaiciu tipo reiksmemis
const laimingiSkaiciai = [11, 22, 33, 66, 99];
console.log('Laimingi skaiciai', laimingiSkaiciai);

const megstamiSkaiciai = [26, 10, 5, 33, 27];
console.log('Megstami skaiciai', megstamiSkaiciai);

const lyginiaiSkaiciai = [2, 4, 6, 8, 10];
console.log('Lyginiai skaiciai', lyginiaiSkaiciai);

//4 sarasas su 5 teksto tipo kintamuju reiksmemis
const lietuviskosRaides = ['č', 'ž', 'ė', 'ū', 'į'];
console.log('Lietuviškos raidės', lietuviskosRaides);

const priebalses = ['b', 'd', 't', 'r', 's'];
console.log('Priebalses:', priebalses);

const balses = ['e', 'y', 'o', 'a', 'u'];
console.log('Balses:', balses);

const vardai = ['Jonas', 'Julius', 'Marius', 'Tomas', 'Juozas'];
console.log('Vardai:', vardai);

//Veiksmai su kintamaisiais
//1 skaiciaus tipo kintamuju SUMA
const laiminguSkaiciuSuma = laimingiSkaiciai[0] + laimingiSkaiciai[1] + laimingiSkaiciai[2] + laimingiSkaiciai[3] + laimingiSkaiciai[4];
console.log('Laimingu skaiciu suma:', laiminguSkaiciuSuma);

const megstamuSkaiciuSuma = megstamiSkaiciai[0] + megstamiSkaiciai[1] + megstamiSkaiciai[2] + megstamiSkaiciai[3] + megstamiSkaiciai[4];
console.log('Megstamu skaiciu suma:', megstamuSkaiciuSuma);

const lyginiuSkaiciuSuma = lyginiaiSkaiciai[0] + lyginiaiSkaiciai[1] + lyginiaiSkaiciai[2] + lyginiaiSkaiciai[3] + lyginiaiSkaiciai[4];
console.log('Lyginiu skaiciu suma:', lyginiuSkaiciuSuma);

//2 teksto tipo kintamuju SUJUNGIMAS SU TARPU

const raidziuKintamujuSujungimasSuTarpu = lietuviskosRaides + ' ' + priebalses + ' ' + balses;
console.log('Raidziu kintamuju sujungimas su tarpu:', raidziuKintamujuSujungimasSuTarpu);

const tekstuSujungimasSuTarpu = pirmasTekstas + ' ' + antrasTekstas + ' ' + treciasTekstas;
console.log('Tekstu sujungimas su tarpu:', tekstuSujungimasSuTarpu);

//3 apskaiciuoti verte sarasu, kuriu verciu tipas skaiciai, logika 1-2+3-4+5

const laiminguSkaiciuVertesApskaiciavimas = laimingiSkaiciai[0] - laimingiSkaiciai[1] + laimingiSkaiciai[2] - laimingiSkaiciai[3] + laimingiSkaiciai[4];
console.log('Laimingu skaiciu vertes apskaiciavimas:', laiminguSkaiciuVertesApskaiciavimas);

const megstamuSkaiciuvertesApsakiciavimas = megstamiSkaiciai[0] - megstamiSkaiciai[1] + megstamiSkaiciai[2] - megstamiSkaiciai[3] + megstamiSkaiciai[4];
console.log('Megstamu skaiciu vertes apskaiciavimas:', megstamuSkaiciuvertesApsakiciavimas);

const lyginiuSkaiciuVertesApskaiciavimas = lyginiaiSkaiciai[0] - lyginiaiSkaiciai[1] + lyginiaiSkaiciai[2] - lyginiaiSkaiciai[3] + lyginiaiSkaiciai[4];
console.log('Lyginiu skaiciu vertes apskaiciavimas:', lyginiuSkaiciuVertesApskaiciavimas);

//4 teksiniu sarasu verciu sujungimas, nuo saraso galo iki pradzios su kableliu ir tarpu

const tekstoTipoSarasoKintamujuSujungimas = lietuviskosRaides[4] + ',' + ' ' + lietuviskosRaides[3] + ',' + ' ' + lietuviskosRaides[2] + ',' + ' ' + lietuviskosRaides[1] + ',' + ' ' + lietuviskosRaides[0];
console.log('Teksto tipo saraso kintamuju sujungimas su kableliu ir tarpu:', tekstoTipoSarasoKintamujuSujungimas);

const varduSarasoKintamujuSujungimas = vardai[4] + ',' +  ' ' + vardai[3] + ',' + ' ' + vardai[2] + ',' + ' ' + vardai[1] + ',' + ' ' + vardai[0];
console.log('Vardu saraso kintamuju sujungimas su kableliu ir tarpu:', varduSarasoKintamujuSujungimas);

const balsiuTipoSarasoKintamujuSujungimas = balses[4] + ',' + ' ' + balses[3] + ',' + ' ' + balses[2] + ',' + ' ' + balses[1] + ',' + ' ' + balses[0];
console.log('Balsiu tipo saraso kintamuju sujungimas:', balsiuTipoSarasoKintamujuSujungimas);


