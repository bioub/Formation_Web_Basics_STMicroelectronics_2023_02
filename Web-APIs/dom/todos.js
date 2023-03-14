/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
function createTodo(todo) {
  const rowEl = document.createElement('div');
  rowEl.dataset.todoId = todo.id;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  rowEl.append(spanEl);

  return rowEl;
}
