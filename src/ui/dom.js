import appState from '../modules/appState.js';

export function render() {
  renderProjects();
  renderTodos();
  updateTodoFormState();
}

function renderProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  appState.getProjects().forEach(project => {
    const item = document.createElement('div');
    item.className = 'project-item';

    const label = document.createElement('button');
    label.type = 'button';
    label.textContent = project.name;
    label.className = 'project-button';
    if (appState.getCurrentProject()?.id === project.id) {
      label.classList.add('active');
    }
    label.addEventListener('click', () => {
      appState.setCurrentProject(project.id);
      render();
    });

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'project-remove';
    remove.textContent = 'Delete';
    remove.addEventListener('click', (event) => {
      event.stopPropagation();
      appState.removeProject(project.id);
      render();
    });

    item.appendChild(label);
    item.appendChild(remove);
    container.appendChild(item);
  });
}

function renderTodos() {
  const project = appState.getCurrentProject();
  const container = document.getElementById('todo-list');
  const title = document.getElementById('current-project');

  container.innerHTML = '';
  if (!project) {
    title.textContent = 'No project selected';
    const noProjectMessage = document.createElement('div');
    noProjectMessage.className = 'empty-state';
    noProjectMessage.textContent = 'Create a project to start adding todos.';
    container.appendChild(noProjectMessage);
    return;
  }

  title.textContent = project.name;

  project.todos.forEach(todo => {
    const card = document.createElement('div');
    card.classList.add('todo', todo.priority);
    if (todo.completed) card.classList.add('completed');

    const content = document.createElement('div');
    content.className = 'todo-content';
    content.innerHTML = `
      <div>
        <strong>${todo.title}</strong>
        <p>${todo.description || ''}</p>
      </div>
      <div class="todo-meta">
        <small>${todo.dueDate || 'No due date'}</small>
        <span class="priority-label">${todo.priority}</span>
      </div>
    `;

    content.addEventListener('click', () => {
      appState.toggleTodo(todo.id);
      render();
    });

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'todo-remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      appState.removeTodo(todo.id);
      render();
    });

    card.appendChild(content);
    card.appendChild(removeButton);
    container.appendChild(card);
  });
}

  function updateTodoFormState() {
    const project = appState.getCurrentProject();
    const form = document.getElementById('todo-form');
    const inputs = form.querySelectorAll('input, select, button');
    inputs.forEach((input) => {
      if (input.type === 'submit' || input.tagName === 'BUTTON') {
        input.disabled = !project;
      } else {
        input.disabled = !project;
      }
    });
    form.classList.toggle('disabled', !project);
  }