const names = ['Romain', 'Toto', 'Titi', 'Tata'];

function hello(name) {
  console.log(`Hello ${name}`);
}

// On va écrire le même algo 2 fois
// avec 2 styles de programmation différents (paradigme)
// L'algo va créer un tableau avec les prénoms de 4 lettres
// en majuscule, puis les afficher

// Version imperative
// utilise les if et les for
const names2 = [];

for (const n of names) {
  if (n.length === 4) {
    names2.push(n.toUpperCase());
  }
}

for (const n of names2) {
  hello(n)
}


// Version fonctionnelle
// utilise des fonctions
const names3 = names.filter((n) => n.length === 4)
                    .map((n) => n.toUpperCase());

// le callback est une fonction que je déclare en vue qu'elle soit
// appelée par un autre API
// on aura pas les parenthèses de l'appel
// names3.forEach(hello);

names3.forEach((n, i) => console.log(n, i));

// pile d'appel
// ^
// |       [log][log][log]
// | for { [=> ][=> ][=> ] }
// |[forEach                ]
// +-----------------------------------------------------------------------> temps

// le callback est synchrone s'il est appelé dans la meme pile d'appel
// il est appelé tout de suite
