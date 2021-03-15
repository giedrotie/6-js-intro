/*

SWITCH STATEMENT: 


switch - ribotu galimybiu funkcionalumas
switch () { case, break, default }

- is esmes dirba su zodynu, kai yra zinomos visos KONKRECIOS GALIMOS REIKSMES,
o IF programine prasme yra "superior" nes jis gali daug daugiau nei switchas

- switch yra labai panasus i kai kiekviena atskiras  casas turi savo logika ir breaka  
darbu arba logikos procesas


 - turi tik viena klausima
 - visada lygina LYGU AR ENELYGU

*/

const animal = 'crocodile';
switch (animal) 
//klausimo dalis

{ case 'dog':
    console.log('Bark bark');
    break;

    case 'cat':
        console.log('Meow meow');
        break;
            // logikos dalis = zodynas reikia isvardinti visus imanomus variantus
    
    default:
        console.log('Unknown animal');
        break;
}

// else ifas atlieka ta pacia funkcija
if (animal === 'dog') {
    console.log ('Bark bark');
} else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknown animal');
}


console.log(' - - - - - - - - - - -');

const day = 2;

switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antr');
        break;
     case 3:
        console.log('trec');
        break;
    default:
        console.log('Tokia diena neegzistuoja');
}

console.log(' - - - - - - - - - - -');

// galima sutraukti ir apjungti i viena logika

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6: case 7:
        //galima ir i viena eilute surasyti
        console.log('savaitgalio diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log(' - - - - - - - - - - -');
//  switch vs if     
//  galima ta pati parasyti du else if'u

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 ) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena savaiteje neegzistuoja');
}

console.log(' - - - - - - - - - - -');

switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('nelygine diena');
        break;

    case 2:     
    case 4:
    case 4:
        console.log('lygine diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log(' - - - - - - - - - - -');

// arbatos pasiruosimas
// 1 reikia paimti puodeli
// 2 isideti arbatos
// 3 uzpilti vandeniu
// 4 isgerti arbata

// jeigu as esu sioje proceso etape, galima paklausti kas man dar liko padaryti?

const process = 3;

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:
    console.log('isideti arbatos');
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandes');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai :)');
}
// kadangi const process 3, jis pradeda tik nuo case 3, ir kadangi nera break israso visus : isideti saldikli  ; ipilti vandes ; ismaisyti ; gerti ir kadangi po case 6 yra break ten ir sustoja. 

/* 
pavyzdys du if-u 

if ( process === 1) {
    console.log('paimti puodeli');
} else if ( process === 2) {
    console.log( ' isideti arbatos');
} else if ( process === 3) {
    console.log ('isideti saldikli');
} else if ( process === 4) {
    console.log('ipilti vandes');
} else if (process === 5 ) {
    console.log( ' ismaisyti');
} else if (process === 6) {
    console.log ('gerti');
}
*/ 