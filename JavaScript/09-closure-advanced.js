for (var i=0; i<3; i++) {
  setTimeout(() => { // arrow function (à utiliser si fonction passée en param)
    console.log(i);
  }, 1000);
}
// résultat : C - ..1s.. 3 3 3

// Dans le chat Zoom, à votre avis que fait ce code (sans l'exécuter) :
// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..1s.. 0 1 2
// C - ..1s.. 3 3 3

// setTimeout est asynchrone : elle ne bloque pas le thread

// pile d'appel
// ^
// |
// |                                                      [log][log][log]
// |for { [setTimeout][setTimeout][setTimeout] }  ....... [=> ][=> ][=> ]
// +------------------------------------------------------1s-----------------> temps

function save(param) {
  return function() {
    console.log(param); // param vient de la closure
  };
}

// hello est une fonction (le retour de save)
const hello = save('Hello');
const bonjour = save('Bonjour');

// quand j'appelle hello, l'appel de save est terminé (on est plus save)
// malgré tout, hello a toujours accès à param
// param est dans la portée de closure, la portée a été sauvegardée
hello(); // Hello

// avec let au lieu de var
for (let i=0; i<3; i++) {
  setTimeout(() => { // arrow function (à utiliser si fonction passée en param)
    console.log(i);
  }, 1000);
}
// résultat : B - ..1s.. 0 1 2
