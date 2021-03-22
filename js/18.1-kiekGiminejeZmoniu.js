// KIEK GIMINEJE YRA NARIU?

function memberCount(asmuo) { // t.y. pirmiausia su gauni Petra
    let nariuKiekis = 1;

    if (asmuo.children) {
        // nariuKiekis += asmuo.children.length;
        for (let i = 0; i < asmuo.children.length; i++){
            const child = asmuo.children[i];
            console.log(child);
            nariuKiekis += memberCount(child);
        }
    }

    return nariuKiekis;
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
                    name: 'Antanas',
                    age: 49
                },
                {
                    name: 'Ona',
                    age: 50
                },
            ]  
        },
        {
            name: 'Jonas',
            age: 43,
            
        },
    ]                               // objektuose visus raktazodzius turime uzvadinti patys
   
}

const kiekNariu = memberCount(gimine1);
console.log(kiekNariu);