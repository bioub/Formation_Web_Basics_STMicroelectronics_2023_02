// const parts = "Romain Bohdanowicz".split(" ");
// const prenom = parts[0];
// const nom = parts[1];

//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          , age = 20] = "Romain Bohdanowicz".split(" ");

const nbs = [1, 2, 3, 4, 5];

// Avec REST
//    [1 , 2   , 3, 4, 5        ]
const [un, deux, ...otherNumbers] = nbs;

// sur des objets

const coords = {x: 1, y: 2};
// const x = coords.x;
// const y = coords.y;

//       { x: 1, y: 2 }
// const { x: x, y: y } = coords;
//            ^ le nom de la variable (à droite du :)


// shorthand property (permet de ne pas répéter key: key)
const username = 'Romain';
// const user = { username: username };
const user = { username };


const { x, y = 10 } = coords;

// REST object
const { z, ...coords2d } = coords;
