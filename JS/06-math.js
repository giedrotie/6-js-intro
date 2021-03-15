const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);
// ^ vienas is budu skaiciuoti vidurki // aprasyti tokia veiksmu seka

console.log(' - - - - - - - - - - -');

const marks = [10, 8, 6, 4]; 
//^ kitas budas vidurkiui apskaiciuoti

let sum = 0; // pirmas dalykas yra susumuoti
             // let!!!!! naudojame, kai keiciasi pries tai buvusio 
             // kintamojo reiksme, pvz suma  
const count = marks.length // tada reikia zinoti o keik is viso yra skaiciu?

sum = sum + marks [0];    //0+10  cia yra atnaujinama suma + sekantis skaicius
console.log('sum', sum);  // sum = 0 + 10 // spausdina 10
                          // o average spausdina 2.5, nes suma / 4 = 2.5
sum = sum + marks [1];   //10 + 8
console.log('sum', sum); // atspausdina 18

sum = sum + marks [2];   //18 + 6
console.log('sum', sum); // atspausdina 24

sum = sum + marks [3];   //24 + 4
console.log('sum', sum); // aspausdina 28
// ^sumos kintamojo keitimosi kelias

const average = sum / count; // 28 / 4 = 7 t.y. visa suma / skaiciu kiekio
console.log(average); // atspausdina 6

// ^^ mintis yra kad mes perrasome kintamojo reiksme nuo pradines defaultines reiksmes ties kiekvienu zingsniu, "tai kas buvo + kazkas naujo"

console.log(' - - - - - - - - - - -');
// supaprastintas uzrasymo budas  su += 
// sumai skaiciuoti

const marks2 = [2, 4, 6, 8];
let sum2 = 0; 
console.log(sum2);

sum2 += marks2[0]; // 0 + 2 , nes sum2 = sum2 + marks2[0];
console.log(sum2);
// nauja matematiniu operatoriu grupe!!!!!!!!, kuri sako += -= *= /=
// += sako, kad sum2 prie saves prisidek papildoma nurodyta skaiciu 
sum2 += marks2[1]; // 2 + 4
console.log(sum2);

sum2 += marks2[2]; // 6 + 6
console.log(sum2);

sum2 += marks2[3]; // 12 + 8 
console.log(sum2);


console.log(' - - - - - - - - - - -');
// dar labiau supaprastinta versija su +=

const marks3 = [2, 4, 6, 8];
let sum3 = 0; // kintamasis kaupiantis suma
let markIndex3 = 0; // kintamasis, kuris reiskia kelinta pazymi is saraso     bandau isstraukti // pradzioje 0 pozicija t.y. dvejetas
console.log(sum3);  // isspausdina 0

sum3 += marks3[markIndex3]; // cia markIndex3 vietoje 0 //  0 + 2
console.log(sum3); // isspausdina  2

markIndex3+= 1; // cia norima pasakyti kad paimti sekanti pazymi is saraso
                // ty norima kintamaji padidinti vienetu (paima sekanti skaiciu)
sum3 += marks3[markIndex3]; // 2 + 4
console.log(sum3); //isspausdina 6

markIndex3+= 1;
sum3 += marks3[markIndex3]; // 6 + 6
console.log(sum3); //isspausdina 12

markIndex3+= 1;
sum3 += marks3[markIndex3]; // 12 + 8 
console.log(sum3); //isspausdina 20

// ideja kad nereiktu vis irasineti ranka naujo skaiciaus, su markIndex3 + 1, tarsi uzloopinu kad vis imtu nauja - sekanti skaiciu is saraso


console.log(' - - - - - - - - - - -');

const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = ''; // let!!!
let rytasIndex = 0; //cia pasidarau Index'a (numeracija) zodzio rytas raidems

zodis += rytas[0]; // yra lygu kas:   zodis = zodis + rytas[0];
console.log(zodis);

rytasIndex ++;  // cia yra lygu rytasIndex += 1
                // ++ operatorius tiesiog padidina skaiciu 1 vienetu!!!!!!
zodis += rytas[rytasIndex]; // cia vietoje zodis += rytas[1];
console.log(zodis); 
 
rytasIndex ++;
zodis += rytas[rytasIndex];
console.log(zodis);

rytasIndex ++;
zodis += rytas[rytasIndex];
console.log(zodis);

rytasIndex ++;
zodis += rytas[rytasIndex];
console.log(zodis);
 
console.log(' - - - - - - - - - - -');

let a = 5;
a++;
console.log(a); // spausdina 6 //nes ++a t.y. padidinu 1 pries isspausdinima
a++;
console.log(a); // spausdina 7
a++;
console.log(a); // spausdina 8

// niuansai su ++. ++ galima rasyti tiek priekyje tiek gale
// koks skirtumas kada rasyti ++ priekyje ir kada gale ++ ?
// jei ++ yra parasytas pries kintamaji tai reiskia, kad padidinti (atlikti matematine operacija) reikia pries KINTAMOJO PANAUDOJIMO REIKSME arba jeigu parasytas po ++ tada ir panaudoti PO KINTAMOJO REIKSMES

console.log(++a); // spausdina 9 //nes ++a t.y. padidinu 1 pries isspausdinima
console.log(++a); // spausdina 10
console.log(a); // spausdina 10 
console.log(++a); // spausdina 11
console.log(a++); // spausdina 11 ///nes a++ t.y. padidinu 1 po isspausdinimo
console.log(a); // spausdina 12
console.log(a++); // spausdina 12 //nes a++ t.y. padidinu 1 po isspausdinimo


 