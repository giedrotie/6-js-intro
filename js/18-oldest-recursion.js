// - rekursija? rasti  didziausia skaiciu betkokio gilumo sarase
// - kas vyriausias gimineje?
// - kas turi daugiausiai vaiku gimineje?

// esme yra eiti per visus sarasus ir is ju istraukti informacija

// rekursija -> kaip eiti per medi?

// GIMINES MEDYJE REIKIA RASTI KAS BUVO/YRA VYRIAUSIAS?

function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i = 0; i<asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childAge = oldest(child); // cia kvieciama to paties pavadinimo funkcija, tik vienu leveliu gilesne informacija. esme kad visada reikia kviesti to paties pavadinimo funkcija siuo atveju "oldest" kas atlieka paieska kas yra vyriausias objekte

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }
    
    return biggestAge;
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
    ]                               // objektuose visus raktazodzius turime uzvadinti patys
   
}

const vyriausias = oldest(gimine1);
console.log(vyriausias);