const form = document.getElementById('form');

const STORAGE_KEY = 'simple_todo_list';
let todos = [];

form.addEventListener('submit', e => {
  e.preventDefault(); // supaya halaman tidak ke refresh ketika di submit
  const input = document.getElementById('newTodo');
  const text = input.value;
  console.log(text);
  addTodo(text);
  input.value = '';
  input.focus();
});

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function addTodo(todo) {
  const newTodo = {
    id: new Date().toString(),
    text: todo,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todo-list');

  list.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.classList.add('todo-text');

    if (todo.completed === true) {
      span.classList.add('completed-todo');
    }

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = todo.completed ? 'Undo' : 'Done';
    toggleBtn.addEventListener('click', () => {
      toggleTodo(todo.id);
    });
    actionsDiv.appendChild(toggleBtn);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    actionsDiv.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(actionsDiv);

    list.appendChild(li);
  });
}

function toggleTodo(id) {
  console.log(id);
  console.log(todos);
  todos = todos.map(e => {
    if (e.id === id) {
      return {
        ...e,
        completed: !e.completed,
      };
    }

    return e;
  });

  saveTodos(todos);
  renderTodos();
}

function loadTodoFromStorage() {
  const todoFromStorage = JSON.parse(
    localStorage.getItem(STORAGE_KEY),
  );
  if (todoFromStorage.length) {
    todos = todoFromStorage;
  }
}

loadTodoFromStorage();
renderTodos();
