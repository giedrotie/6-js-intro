
// VIDUTINIS GIMINES AMZIUS

function averageAge(asmuo) {
    let childCount = 1;
    let childAgeSum = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++){
            const child = asmuo.children[1];

            const childInfo = averageAge(child);

            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;

            console.log(childInfo);

        }
    }
    
    return {
        childClount: childCount,
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
let average = giminesDuomenys.ageSum / giminesDuomenys.childCount
console.log(giminesDuomenys, "Average age:", average);