// importe l'API readline de Node.js
const readline = require('readline');

// configure où lire la ligne
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi', answer);

    // pour rejouer
    jouer();

    // rl.close(); // désenregistre les callback async
    // le programme va s'arrêter (sinon CTRL-C pour killer)
  });
}

jouer();
