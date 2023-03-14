/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-new-input');

/** @type {HTMLDivElement} */
const divEl = document.querySelector('.todos-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const itemEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  divEl.prepend(itemEl);
});
