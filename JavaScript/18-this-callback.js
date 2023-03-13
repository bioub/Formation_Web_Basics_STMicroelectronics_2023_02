// Problème this === timer (instance de Timeout) dans Node
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloAsync() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// }

// Solution historique: utiliser la portée de closure
// pour sauvegarder this
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloAsync() {
//     // portée de closure
//     const that = this;
//     setTimeout(function() {
//       console.log(that);
//       console.log(`Hello ${that.name}`);
//     }, 1000);
//   }
// }

// Solution avec .bind (si pas de closure)
// Important dans la bibliothèque React
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloAsync() {
//     // portée de closure
//     setTimeout(this.hello.bind(this), 1000);
//   }
// }

// Solution fonction fléchée
class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloAsync() {
    // portée de closure
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}

const romain = new User('Romain');
romain.hello(); // Hello Romain
romain.helloAsync(); // Hello undefined
