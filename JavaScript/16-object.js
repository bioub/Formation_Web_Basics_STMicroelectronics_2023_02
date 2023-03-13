// JavaScript regorge d'objets globaux

// par exemple dans le langage :
console.log('typeof Math', typeof Math);
console.log('typeof JSON', typeof JSON);

// les fonctions sont des objets donc ces exemples sont aussi des objets :
console.log('typeof String', typeof String);
console.log('typeof Array', typeof Array);
console.log('typeof Number', typeof Number);

// la plate-forme ajoute ses objets globaux :

// pour le navigateur
console.log('typeof document', typeof document);
console.log('typeof window', typeof window);
console.log('typeof navigator', typeof navigator);

// pour Node.js
console.log('typeof process', typeof process);
console.log('typeof global', typeof global);

// pour le navigateur et Node.js
console.log('typeof console', typeof console);

// l'objet en JS est un concept dynamique et extensible

console.log('typeof Math.sum', typeof Math.sum); // undefined

// étendre l'objet Math avec notre méthode sum
Math.sum = function(a, b) {
  return a + b;
};

Math.sum = (a, b) => a + b;

console.log('typeof Math.sum', typeof Math.sum); // function

// ATTENTION Mauvaise pratique de modifier les objets globaux
// delete Math.random;
// delete globalThis.Math;
// console.log(Math.random());

// Si besoin de créer ses propres objets

// 2 syntaxes
// object literal
// constructor -> class

// use cases : object literal
// 1 - un objet qui n'est créé qu'une fois (objet global ou objet pour passer des paramètres)
// 2 - un objet qui peut être créé plusieurs fois si pas de méthodes

globalThis.MyMath = {
  // sum: function (a, b) {
  //   return a + b;
  // },
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

console.log(MyMath.sum(1, 2)); // 3

const coordsA = {
  x: 1,
  y: 2,
};

const coordsB = {
  x: 3,
  y: 4,
};

// use cases : constructor -> class
// le reste, les objets créés (potentiellement) plusieurs fois et qui ont des méthodes

class User {

}

// function User() {

// }

const user1 = new User();

console.log('typeof user1', typeof user1); // object
console.log('typeof User', typeof User); // function
