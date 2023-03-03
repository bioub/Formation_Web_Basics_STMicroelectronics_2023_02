// function hello(name) {
//   return `Hello ${name}`;
// }

// const hello = (name) => `Hello ${name}`;

// si un seul param les parenthèses sont optionnels
// mais si 0 ou 2+: parenthèses obligatoires
// si type statique TS: parenthèses obligatoires
const hello = name => `Hello ${name}`;

// dans une arrow function les pseudo variables ne sont pas créées
// (this, arguments...)
