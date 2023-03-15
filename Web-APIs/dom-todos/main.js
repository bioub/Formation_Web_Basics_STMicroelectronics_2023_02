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
/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-toggle-checked');

toggleEl.addEventListener('click', () => {
  // document.querySelectorAll('.todos-container input[type=checkbox]')
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = divEl.querySelectorAll('.todos-completed');

  // si besoin d'appeler .filter par exemple
  // const checkboxArray = Array.from(checkboxEls);

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  divEl.prepend(itemEl);
});

