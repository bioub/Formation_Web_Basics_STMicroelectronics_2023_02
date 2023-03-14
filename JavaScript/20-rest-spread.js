// REST operator
// (... au moment de créer la variable)
function sum(a, b, ...otherNumbers) {
  let result = a + b;

  for (const arg of otherNumbers) {
    result += arg;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));

// Conversion syntaxique d'une liste de valeurs en tableau
// de valeurs
// ici 3, 4 se transforme en [3, 4]

// SPREAD operator
// (... au moment de lire la variable)
// la conversion inverse
// Conversion syntaxique d'un tableau de valeurs
// en une liste de valeurs
// ici [3, 4] se transforme en 3, 4

const nbs = [3, 4];

function multiply(a, b) {
  return a * b;
}

console.log(multiply(nbs[0], nbs[1]));
// Avec SPREAD operator :
console.log(multiply(...nbs));

// La syntaxe à utiliser pour cloner un tableau
// (en surface, pas récursif)
const cloneNbs = [...nbs];

// Modifier le tableau de façon immuable (en créant
// un nouveau tableau)
// en muable nbs.push(5);
const newNbs = [...nbs, 5];

// Depuis 2018
// On peut aussi utiliser REST et SPREAD sur des objets

const coords = {x: 1, y: 2};

// Pour cloner des objets (en surface, pas récursif)
const cloneCoords = {...coords};
const newCoords = {...coords, z: 3};
