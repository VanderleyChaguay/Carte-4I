let carte = document.getElementsByClassName('carta');
let button = document.querySelector('#girareCarte');

// Procedure per mostrare la schiena delle carte
function stampaSchiena() {
    let rand = Math.floor(Math.random() * 3);
    // Carte Blue
    if (rand == 1) {
        for (let i = 0; i < carte.length; i++) {
            carte[i].innerHTML = '<img src="cards/B_R.png" alt="">';
        }
    // Carte Red
    } else {
        for (let i = 0; i < carte.length; i++) {
            carte[i].innerHTML = '<img src="cards/B_B.png" alt="">';
        }
    }

}
// Richiamo della funzione
stampaSchiena();
// funzione girare carte 
function girareCarte() {
    // array di ogetti per salvare le carte gia mostrate
    let Carte = [{
            lettere: -1,
            numeri: -1
        },
        {
            lettere: -1,
            numeri: -1
        },
        {
            lettere: -1,
            numeri: -1
        },
        {
            lettere: -1,
            numeri: -1
        }
    ];
    // Procedure per mostrare carte
    let lettere = ["C", "D", "H", "S"];
    for (let i = 0; i < 4; i++) {
        let rand, randNum;
        let repeat;
        do {
            rand = Math.floor(Math.random() * 4);
            randNum = Math.floor(Math.random() * 13) + 1;
            repeat = false;
            // Verifica le carte mostrate
            if (i > 0) {
                for (let j = 0; j < i; j++) {
                    if (rand === Carte[j].lettere && randNum === Carte[j].numeri) {
                        repeat = true;
                    }
                }
            }
        } while (repeat);//se la carta è stata mostrata ripete e crea una nuova

        // Mostrare carte
        carte[i].innerHTML = `<img src="cards/${lettere[rand]}_${randNum}.png" alt="">`;
        // salvare le carte mostrate
        Carte[i].lettere = rand;
        Carte[i].numeri = randNum;
    }
    // disabilitare button per girare carta
    button.disabled = true;
}