class User {
  #name = 'Romain';

  hello() {
    return `Hello ${this.#name}`;
  }
}

const romain = new User();
console.log(romain.hello());
// console.log(romain.#name);
