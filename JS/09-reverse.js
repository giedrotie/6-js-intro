/* panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/


const text ='abcdef';              // ka mes turime? - texta 
let reverse = '';           // ka mes norime gauti? - reverse
                                    //pradzioje '' - tuscias  
// koki algoritma sugalvoti?

// ciklas:
                                        // text.length reikalingas kad visas raides tekste paimtu
for ( let i=0; i < text.length; i++) {     // i bus teksto saraso itoji raide
   console.log(i, text[i]);                // cia isspausdins indexa ir kokia raide zymi
                           
   reverse += text[text.length - 1 - i];   //[skliaustuose] galima atlikti matematinius veiksmus
                                           // vienas budas
}
    console.log(reverse);
    
/*
0 -> 5
1 -> 4          texto ilgis yra 5  = texto ilgis - 1 
2 -> 3          texto ilgis - 1
*/


 for (let i = 0; i < text.length; i++) {
  reverse = text[i] + reverse;           // svarbu zinoti kur ta raide dadame
                                        // i prieki statome text[i] o ne is galo
                                    
}
console.log(text, '->', reverse);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// kitas SPRENDIMO BUDAS:

for ( let i = text.length - 1; i >= 0; i-- ) {
    console.log(i, text[i]);
    reverse += text[i];
}
console.log(text, '->', reverse); 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// trecias SPRENDIMO BUDAS

for ( let i = text.length; i > 0; i--) {
    reverse += text[i - 1];
}
console.log(text, '->', reverse); 



/* **************************************************
 paverskime  REVERSE CIKLA i funkcija:

const pirmasZodis ='abcdef';

function reverseString (text) { // kai mano funkcija gaus bet koki teksta nesvarbu 
                                // koki zodi (text), 
let reverse = '';               //ji inicijuoja tuscia kintamaji - let reverse , 

for (let i = 0; i < text.length; i++) { //tada eina per ta duota teksta - per jo 
                                        //ilgi (text.length)
    reverse = text[i] + reverse;        //istraukineja raides text[i], sustato ten 
                                        //kur reikia (reverse)
}
}
  console.log(text, '->', reverse);     // isspausdina i console

  reverseString(pirmasZodis); //funkcijos iskvietimas 
  ******************************************** */