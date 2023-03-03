setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel
// ^
// |
// |                                                             [log]                          [log]      [log]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ..⟳..  [taskLogB] ..⟳..               [taskLogA][taskLogD]
// +-------------------------------------------------------------7ms-----------------------------500ms--------------------------> temps
// SORTIE:                                          E            B                               A         D

// File d'attente (0ms): taskLogB
// File d'attente (7ms):
// File d'attente (500ms): taskLogA - taskLogD

// Les navigateurs (Chrome, Firefox, Safari, Edge) ou Node.js sont écrit en C++

// Côté C++ le code JavaScript est exécuté par le moteur JavaScript (V8, SpiderMonkey, JavaScriptCore)
// (qui est une lib C++)
// On appelle cette boucle la boucle d'événement (Event Loop)

// En pseudo code
// do {
//   moteur.executeCurrentCallStack();
//   if (browser) paintWindow();
// } while(thereIsAsyncTaskToCall)


// le callback est asynchrone s'il est appelé dans une nouvelle pile d'appel
// il est appelé plus tard

// A voir sur le sujet :
// Jake Archibald: In The Loop (JSconf Asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0


