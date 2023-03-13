const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

// importe l'API readline de Node.js
const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    // configure où lire la ligne
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(options.min ?? 0, options.max ?? 100);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez saisi', answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Error : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        // désenregistre les callback async
        // le programme va s'arrêter (sinon CTRL-C pour killer)
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

const game = new Jeu();
game.jouer();

// pile d'appel
// ^
// |                                    [question]                  [question]
// |[question]                          [jouer   ]                  [jouer   ]
// |[jouer   ]  ..⟳..                   [=>      ]  ..⟳..           [=>      ]
// +------------------------------------ENTREE-----------------------ENTREE----------------------------------------------------------------> temps
