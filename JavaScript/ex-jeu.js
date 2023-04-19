function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


// importe l'API readline de Node.js
const readline = require('node:readline');
const process = require('node:process');

// configure où lire la ligne
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function jouer() {
  if (essais.length) {
    console.log('Vous avez saisi : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi', answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Error : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      // désenregistre les callback async
      // le programme va s'arrêter (sinon CTRL-C pour killer)
      console.log('Gagné');
      rl.close();
    }
  });
}

try {
  const entierAlea = getRandomInt(0, 100);
  const essais = [];
  jouer();
} catch (error) {

}

// pile d'appel
// ^
// |                                           [question]                  [question]
// |      [question]                           [jouer   ]                  [jouer   ]
// |try { [jouer   ] } ..⟳..                   [=>      ]  ..⟳..           [=>      ]
// +-------------------------------------------ENTREE-----------------------ENTREE----------------------------------------------------------------> temps
