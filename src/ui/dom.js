import appState from '../modules/appState.js';

export function render() {
  renderProjects();
  renderTodos();
}

function renderProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  appState.getProjects().forEach(project => {
    const div = document.createElement('div');
    div.textContent = project.name;

    div.addEventListener('click', () => {
      appState.setCurrentProject(project.id);
      render();
    });

    container.appendChild(div);
  });
}

function renderTodos() {
  const project = appState.getCurrentProject();
  const container = document.getElementById('todo-list');
  const title = document.getElementById('current-project');

  container.innerHTML = '';
  if (!project) return;

  title.textContent = project.name;

  project.todos.forEach(todo => {
    const div = document.createElement('div');
    div.classList.add('todo', todo.priority);

    if (todo.completed) div.classList.add('completed');

    div.innerHTML = `
      <strong>${todo.title}</strong>
      <p>${todo.description || ''}</p>
      <small>${todo.dueDate || ''}</small>
    `;

    div.addEventListener('click', () => {
      appState.toggleTodo(todo.id);
      render();
    });

    container.appendChild(div);
  });
}