// GIMINES MEDYJE REIKIA RASTI KAS BUVO/YRA VYRIAUSIAS?


function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }

    return biggestAge;
}



function oldestWithName(asmuo) {
    let oldestName = asmuo.name;
    let biggestAge = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const oldestChild = oldestWithName(child); // cia kvieciama to paties pavadinimo funkcija, tik vienu leveliu gilesne informacija. esme kad visada reikia kviesti to paties pavadinimo funkcija siuo atveju "oldest" kas atlieka paieska kas yra vyriausias objekte

            if (oldestChild.age > biggestAge) {
                biggestAge = oldestChild.age;
                oldestName = oldestChild.name;
            }
        }
    }
    
    return {
        name: oldestName,
        age: biggestAge
    };
}

const gimine1 = {                   // objektas yra kompleskinis kintamasis panasus i array
    name: 'Petras',                // array susideda indexus nuo 0, tada 1, 2 3 ir tt.
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]  
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20
                },
                {
                    name: 'Gokas',
                    age: 200
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]  
        },
    ]           // objektuose visus raktazodzius turime uzvadinti patys
   
}


const vyriausias = oldest(gimine1);
console.log(vyriausias);

const vyriausiasAsmuo = oldestWithName(gimine1);
console.log(vyriausiasAsmuo);
