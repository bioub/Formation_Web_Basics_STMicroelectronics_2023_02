'use strict';

const coords = {
  x: 1,
  y: 2,
};

// extension d'objet
// coords.z = 3;

// extension plus fine d'objet
Object.defineProperty(coords, 'z', {
  value: 3,
  // les options writable, enumerable et configurable valent false par défaut
  // writable: false,
  // enumerable: false, // pas dans les boucles ou JSON.stringify
  // configurable: false, // empeche delete ou un nouveau defineProperty
});

// coords.z = 10; // ne fait rien, fait une erreur en mode strict
console.log(coords.z); // 3


// 3 méthodes pour convertir les objets en tableau
console.log(Object.keys(coords)); // ['x', 'y']; -> pas z car non enumerable
console.log(Object.values(coords)); // [1, 2]; -> pas z car non enumerable
console.log(Object.entries(coords)); // [['x', 1], ['y', 2]]; -> pas z car non enumerable

// 1 méthode pour convertir un tableau en objet
console.log(Object.fromEntries([['x', 1], ['y', 2]]));

Object.preventExtensions(Math);

// Erreur car pas extensible
// Math.sum = (a, b) => a + b;



const settings = {
  menuBar: true,
};

// malgré const l'objet est toujours modifiable
settings.title = 'test';

// avec Object.freeze l'objet devient constant
Object.freeze(settings);

