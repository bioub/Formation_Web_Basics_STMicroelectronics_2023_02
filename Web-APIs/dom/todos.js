/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
function createTodo(todo) {
  /*
  Exercice 1 :
  Compléter cette fonction de sorte à créer également
  la checkbox et le bouton comme dans le code HTML suivant :
  <div data-todo-id="0.32452543">
    <input type="checkbox">
    <span>Item 1</span>
    <button>-</button>
  </div>
  Il faut que la checkbox soit cochée si todo.completed === true
  */

  const rowEl = document.createElement('div');
  rowEl.dataset.todoId = todo.id;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  rowEl.append(spanEl);

  /*
  Exercice 4 :
  Ecouter le double-clic de la balise span
  et transformer la balise span en input (de sorte
  à pouvoir modifier le contenu)
  Ecouter l'événement keydown de l'input
  si l'utilisateur tape sur ENTREE revenir à la balise span
  */

  /*
  Exercice 2 :
  Dans l'exercice vous avez créé un bouton
  Ecouter le clic de ce bouton et supprimer
  la ligne parent du bouton au clic
  */

  return rowEl;
}
