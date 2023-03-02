// == (opérateur d'égalité)
// - 2 valeurs équivalentes
// - l'opérateur fait la conversion
console.log(123 == '123'); // true

// === (opérateur d'égalité stricte)
// si 2 types différents -> false
// pas de conversion
console.log(123 === '123'); // false

// souvent les conventions imposent le ===
// 1 - plus performant (pas de conversion)
// 2 - avec == dans quel sens se fait la conversion
// si 123 == '123', est-ce qu'il convertit string en number ou number en string ???

// problème avec false converti en string : 'false', 'false' converti en Boolean : true

// Opérateur ** (ES2016)
console.log(2 ** 3); // 2 * 2 * 2
