// kintamieji - jo atmintyje yra laikoma informacija
// salygis sakiniai - issakoti logika pagal ka daryti kai daugiau/maziau, tiesa/netiesa
// ciklai - kai turime sarasa su informacija kuri yra vienodos strukturos (pvz su pazymiais - vidurkis/ didziausias/ maziausias pazymis)
// funkcijos - aprasome logika, kuria norime perpanaudoti N kartu, tik su galimai skirtingais parametrais

// event'ai (event listeners) - skirta stebeti ivykius (click, scroll, keypress ir pan) i kuriuos reikia sureaguoti iskvieciant norima funkcija


// VIDUTINIS GIMINES AMZIUS 18.3-avgAge.js
// uzdavinio esme kad vienu metu reikia sumuoti dvi reiksmes t.y. asmenu/vaiku counta/kieki ir amziaus counta

.length 

function pavadinimasKoIeskome(kintamujuSarasoTevas) { 
    let kintamasisKurioIeskome = 0;  
    let ieskomuParametruSumaPvzAgeSum = kinamujuSarasoTevas.age; 


    if (kintamujuSarasoTevas.children) {    // jeigu vaiku yra, suskaiciuoti kiek

      /* ****** tada ciklas arba jeigu children nera, tada is karto ciklas ***** */
        // ty EINAME PER SARASA:

        for (let i = 0; i < kintamujuSarasoTevas.children.length; i++){
            const itasisVaikas = kintamujuSarasoTevas.children[i];  // kiekvienas vaikasis saraso

            // cia yra funkcijos RECURSION!!!!!!!!!!!!!!
            const vaikuInfo = pavadinimasKoIeskome(kintamujuSarasoVaikai); 

            kintamasisKurioIeskome += vaikuInfo.kintamasisKurioIeskome;
            ieskomuParametruSumaPvzAgeSum += vaikuInfo.ageSum;
        }
    }
    return { // grazink saraso formoje 
        vaikuKiekis: vaikuKiekis,
        amziausSuma: vaikuAmziausSUma
    }
}

const giminesDuomenys = pavadinimasKoIeskome (kintamujuSarasoPavadinimas);
let average = giminesDuomenys.ageSum / giminesDuomenys.vaikuKiekis;
console.log(giminesDuomenys, "Average age:", average);


const gimine1 = {                   // objektas yra kompleskinis kintamasis panasus i array
    name: 'Pedro',                // array susideda indexus nuo 0, tada 1, 2 3 ir tt.
    age: 40,
    children: [
        {
            name: 'Suzi',
            age: 88,
        },
        {
            name: 'Jonaz',
            age: 89,
            children: [
                {
                    name: 'Huhu',
                    age: 25,
                    children: [
                        {
                            name: 'Eggo',
                            age: 99
                        },
                    ]
                },
            ]  
        },
    ]                  // objektuose visus raktazodzius turime uzvadinti patys
   
}

