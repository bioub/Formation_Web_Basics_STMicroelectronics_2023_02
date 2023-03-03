// Valeurs par défaut

// Méthode 1: tester si undefined
// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// Méthode 2: utiliser l'opérateur ||
// Fonctionnement du OR || avec des booléens
// false || false -> false
// false || true  -> true
// si la première opérande vaut false, le résultat de l'expression
// est égal à la 2e opérande
// Pour optimiser JS va directement affecter la 2e valeur dans ce cas
// Si la première opérande est d'un autre type, il est converti en booleen
// pour le test
// Boolean(0) -> false
// Boolean(1) -> true
// Boolean(40) -> true
// Boolean('') -> false
// Boolean('abc') -> true
// Boolean(null) -> false
// Boolean(undefined) -> false
// function sum(a, b, c) {
//   c = c || 0;
//   return a + b + c;
// }

// console.log(sum(2, 3));

// Attention si on doit passer une valeur falsy (équivalent à false) comme 0
// ça activera la valeur par défault
// function minMax(min, max) {
//   min = min || 0;
//   max = max || 100;
//   return [min, max];
// }

// console.log(minMax(10, 20)); // [10, 20]
// console.log(minMax(10)); // [10, 100]
// console.log(minMax()); // [0, 100]

// Bug si je veux affecter 0 à max (0 est false donc le || affecte 100)
// console.log(minMax(-10, 0)); // [-10, 100]

// Utiliser le || seulement si la valeur par défaut est falsy : '', false, 0
// Avec tableau ou object moins génant car tableau vide ou object vide sont truthy : [], {}

// En 2020 apparait l'opérateur ?? pour remédier à ce problème
// Méthode 3 : l'opérateur Nullish Coalescing Operator
// Fonctionnement de l'opérateur, affecte la 2e partie si la première est nullish (null ou undefined uniquement)
// function minMax(min, max) {
//   min = min ?? 0;
//   max = max ?? 100;
//   return [min, max];
// }
// console.log(minMax(-10, 0)); // [-10, 0]

// Méthode 4 : default param (2015)
function minMax(min = 0, max = 100) {
  return [min, max];
}
console.log(minMax(-10, 0)); // [-10, 0]

// le ?? est plus général (peut s'applique à autre chose le param)
function getValue(array, index) {
  return array[index] ?? 0;
}
console.log(getValue([5, 6, 7], 10)); // 0

