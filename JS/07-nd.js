onst marks = [5, 7, 10, 4, 2, 10, 8 ];
let sum = 0;

for (let i = 0; i < marks.length; i++) { 
    const pazymys = marks[i];  // pazymys uzsivadinu kintamaji
    
    // ciklas ejo ratu per pazymius, kiekviena kart issitraukdamas vis nauja pazymi ir ji vis prisumavo prie sum kintamojo
   
     /* console.log(marks[i]);  //kiek bus saraso nariu, tiek isspausdins
                               // klausimas ka as noriu suzinoti?  
                               // ^ 1. noriu  visus saraso narius, issispausdinti panariui */
    sum +=  pazymys;           // sum = sum + pazymys; 

    console.log(pazymys, sum); // isspausdia kiekviena pazymi ir suma

}

const average = sum / marks.length;
console.log (sum, '/', marks.length, '=', average); // 46 "/" 7 "=" 6.57
