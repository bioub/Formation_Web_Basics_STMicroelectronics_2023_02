function pseudo() {
  // à l'appel 4 pseudo variables sont créé dynamiquement
  // this, arguments, super, new.target
  console.log(this);
  console.log(arguments);
  // console.log(super);
  console.log(new.target);
}

pseudo(1, 2, 3);


// Méthode 1 : legacy, utiliser la pseudo variable arguments
// impossible en TS
// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     const arg = arguments[i];
//     result += arg;
//   }

//   return result;
// }

// console.log(sum(1, 2, 3, 4)); // 10


// Méthode 2 : moderne, utiliser le REST Param operator
// important : toujours finir par les ...
function sum(a, b, ...otherNumbers) {
  let result = a + b;

  for (const arg of otherNumbers) {
    result += arg;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10


// [1, 2, 3].forEach((el) => {
//   // on ne peut utiliser break ou continue
// });
