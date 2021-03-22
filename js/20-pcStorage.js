/* nd paieska kiek is viso atminties kompe sunaudota 
nes norint suzinoti kiek atminties sunaudota, reikia pereiti per visu failu diske strukturas, jei rantu failiuka, paklausiu koks jo dydis ir prisumuoju prie paskutinio kintamojo sumos

.... Duota kietojo disko duomenu struktura (folder > file) ir reikia suskaiciuoti kiek vietos uzima visi failai.

Folder uzima 0 vietos
*/

function storage(){
    return 0;
}

const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Program Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: [ ]
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 14
                        }
                    ]
                '
                }
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
            {
                name: 'DiagTrack',
                type: 'folder',
                size: 2
                sizeUnits: 'kb'
            },

        ]
        },
        {
            name: 'msdia008.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}

const totalKbs = storage(pc);
console.log('Used space:', totalKbs, 'KB');