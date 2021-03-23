// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){

  const zodziai = name.split(' ');

  const abbr = zodziai[0][0] + '.' + zodziai[1][0]
  return abbr.toUpperCase();

}


console.log(abbrevName("Sam Harris"),'->', "S.H");
console.log(abbrevName("Patrick Feenan"),'->', "P.F");
console.log(abbrevName("Evan Cole"),'->', "E.C");
console.log(abbrevName("P Favuzzi"),'->', "P.F");
console.log(abbrevName("David Mendieta"),'->',"D.M");