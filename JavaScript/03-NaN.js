// NaN: Not a Number
// valeur de type number

// résultat d'une opération impossible
console.log(Math.sqrt(-1)); // NaN
console.log(Number('abc')); // NaN

// le piège : NaN ne peut pas être comparé :
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// pour tester NaN, on utiliser isNaN ou Number.isNaN

console.log(Number.isNaN(Number('ABC'))); // true
console.log(Number.isNaN(Number('123'))); // false

console.log(typeof NaN); // number
