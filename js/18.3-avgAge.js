
// VIDUTINIS GIMINES AMZIUS 18.3-avgAge.js
// uzdavinio esme kad vienu metu reikia sumuoti dvi reiksmes t.y. asmenu/vaiku counta/kieki ir amziaus counta

function averageAge(asmuo) { 
    let childCount = 1;   // vaiku kiekis = 1 , nes pedro jau yra 1
    let childAgeSum = asmuo.age;  // vaiku amziaus suma

    if (asmuo.children) { // jeigu vaiku yra, suskaiciuoti kiek
        for (let i = 0; i < asmuo.children.length; i++){
            const child = asmuo.children[i]; // kiekvienas vaikas 

            const childInfo = averageAge(child);

            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;
        }
    }

    return {
        childCount: childCount,
        ageSum: childAgeSum 
    }
}

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
    ]                               // objektuose visus raktazodzius turime uzvadinti patys
   
}
const giminesDuomenys = averageAge(gimine1);
let average = giminesDuomenys.ageSum / giminesDuomenys.childCount;
console.log(giminesDuomenys, "Average age:", average);
