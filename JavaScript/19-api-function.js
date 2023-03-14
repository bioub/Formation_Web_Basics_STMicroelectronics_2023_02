// 'use strict';

// function hello() {
//   console.log(this);
//   // === globalThis (en sloppy)
//   // === undefined (mode strict)
//   console.log('Hello ' + this.name);
// }

const user = {
  name: 'Romain',
};

function hello(p1, p2) {
  console.log(`Hello ${p1}, ${p2} my name is ${this.name}`);
}

hello.call(user, 'Toto', 'Titi');
hello.apply(user, ['Toto', 'Titi']);
hello.call(user, ...['Toto', 'Titi']);

const helloUser = hello.bind(user);
helloUser('Toto', 'Titi');



function sum(a, b) {
  let result = a + b;

  // Array.from(arguments).slice(2);
  // const args = Array.prototype.slice.call(arguments, 2);
  for (let i = 2; i < arguments.length; i++) {
    const arg = arguments[i];
    result += arg;
  }

  return result;
}
