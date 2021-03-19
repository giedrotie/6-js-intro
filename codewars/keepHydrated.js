// https://www.codewars.com/kata/582cb0224e56e068d800003c/javascript


function litres(time) {
    Math.floor(time)
    let litres = Math.floor(time) * 0.5 ;
    const result =  Math.floor(litres);
    return result;
}

/*
} 
if (hours > 1){
    console.log(hours);
    return hours;  
} else {
    if (hours < 1);
    return 0;
} */




// 1 paimti skaiciu is saraso t.y. hours
// ji suapvalinti iki sveikojo skaiciaus i mazaja puse hours Math

// 1 sumazint kiek valandu vaziuoja
// 2 / 0.5 per h
// laika suaovalinti iki zemesnio sveiko skaiciaus
// jei isgeria < 1 l, tada suapvalinti iki maziausio sveiko skaiciaus
// liters = valandas * 0.5 = 


console.log(litres(2), '->', 'should return 1 litre');
console.log(litres(1.4), '->',  'should return 0 litres');
console.log(litres(12.3), '->', 'should return 6 litres');
console.log(litres(0.82), '->', 'should return 0 litres');
console.log(litres(11.8), '->', 'should return 5 litres');
console.log(litres(1787), '->', 'should return 893 litres');
console.log(litres(0), '->', 'should return 0 litres');
 