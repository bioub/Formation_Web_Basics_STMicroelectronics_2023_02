// une variable ou une fonction déclarée à la racine d'un fichier
// peut être globale ou locale au fichier
// dépend de la notion de module en JavaScript

// Dans le navigateur si <script type="module"> la variable
// est dans la portée de module, sinon elle est globale (legacy)

// Dans Node.js elle est systématiquement locale au fichier
// Il y a 2 systèmes :
// - Module CommonJS (plutôt legacy) <- par défaut
// - Module ESM (moderne)
const varFile = 'varFile';

// Si on souhaite créer un variable globale (quelque soit le système)
// globalThis apparu en 2020
globalThis.varGlobal = 'varGlobal';

function hello(paramLocal = 'paramLocal') {
  const varLocal = 'varLocal';
}

// varLocal n'est pas accessible ici (locale à la fonction)

if (true) {
  const varBlock = 'varBlock';
}

// varBlock n'est pas accessible ici (accessible uniquement dans le bloc/dans le if)

function externe() {
  const varLocalExterne = 'varLocalExterne';
  function interne() {
    const varLocalInterne = 'varLocalInterne';
    // ici on accède a toutes les portées de niveau supérieure
    console.log(varGlobal);
    console.log(varFile);
    // du point de vue de interne, cette variable est dans une portée dite de closure
    console.log(varLocalExterne);
    console.log(varLocalInterne);
  }
  interne();
}

externe();
