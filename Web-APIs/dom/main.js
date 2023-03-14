/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-new-input');

/** @type {HTMLDivElement} */
const divEl = document.querySelector('.todos-container');

/*
Exercice 3
Sélectionner et ecouter le clic de la checkbox du formulaire
<input type="checkbox" class="todos-toggle-checked">
Au clic cocher ou décocher toutes les checkbox
créées dans l'exercice 1 (celles dans divEl)
*/

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  divEl.prepend(itemEl);
});
