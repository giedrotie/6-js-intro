  // duoti du sarasai

  // 1 yra ksu netinkamom reiksmem
  // 2 duotas pilnas sarasas
  // 3 yra grazintas sarasas is kurio ismestos netinkamos reiksmes, turi likti visa kita


  function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; // sarasas kurio reiksmes reikia ismesti lauk
    
    const rez = []; //  sarasas kuriame kaupsime visas leistinas reiksmes

                    // pirma dirbu su pirmu testu 
                    // esme - paimu viena is saraso nariu ir paklausiu ar ta reiksme yra tarp neleistinu
                

                // 1 einame  per gauta sarasa (birds) (for ciklas)
                        // 2 paimame birds sarase esanti nari (bird) (let i )
                        // 3 reikia palyginti ar bird yra geese sarase 
                        // 4 reikia eiti per geesesarasa (for)
                                // 4 paimti geese nari,
                                // 5 jeigu , geese narys sutampa su bird reiksme, tai ta bird reiksme  yra neleistina / neitraukiama i rez sarasa (if) 
                                // 6 priesingu atveju - bird itraukiame i rez sarasa su  neigiamu -if

        for (let b=0; b < birds.length; b++ ){ //1 for 2 let i 
            const bird = birds[b]; 
                     // console.log(bird);            issispausdinu pasitikrint
                     // console.log('Paieskomas paukstis:', bird);
           
            let yraSarase = false          // sakykime kad paukstis kurio ieskome sarase 
                                            //neegzistuoja
           for (let g=0; g < geese.length; g++ ) {
                    const goose = geese[g];
                                            // console.log('ar jis', goose);
                    if  (goose === bird){   // jeigu zasis kurios ieskau sutampa su bird
                        yraSarase = true;   // as ja radau radau ir galiu nutraukti
                        break;
                    }
           }

           if (!yraSarase ){          // ar / jei  nera sarase?
                    rez.push(bird);  // rez.push => itraukti i sarasa kuri nuro me gauti
           }

        }
    
            return rez;
  }





     console.log(gooseFilter( 
         ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), //sis  sarasa  kuri reikia isfiltruoti
         ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]); // kas turi likti
 
      console.log (gooseFilter(
         ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
         ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);


     console.log (gooseFilter(
         ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),
         []);   // jeigu mes duodame visas neleistinas reiksmes , turi atsiusti tuscia sarasa.

        
