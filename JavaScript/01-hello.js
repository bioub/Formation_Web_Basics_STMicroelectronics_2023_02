// pour déclarer une variable (en JS moderne) on utilise const ou let
// si besoin de réaffecter une valeur
const names = ['Toto', 'Titi', 'Tata'];

function hello(name) {
  // backquote (clavier Windows AltGr 7)
  // template literal, chaine de caractère interprétée
  // ${name} sera remplacé par le nom
  return `Hello ${name}`;
}

// boucle sur tous les éléments du tableau
for (const n of names) {
  // affiche dans le Terminal (si Node.js)
  // dans les DevTools (si Browser)
  console.log(hello(n));
}
