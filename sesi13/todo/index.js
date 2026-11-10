const renderData = async () => {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  const response = await fetch(
    'http://localhost:3000/todos',
  );
  const data = await response.json();

  data.forEach(todo => {
    const li = document.createElement('h3');
    li.textContent = todo.title;
    list.appendChild(li);
  });
};

renderData();
