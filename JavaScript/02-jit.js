function hello(name) {
  return `Hello ${name}`;
}

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');

console.time('hello call');
hello(123)
console.timeEnd('hello call');

console.time('hello call');
hello('Romain')
console.timeEnd('hello call');
