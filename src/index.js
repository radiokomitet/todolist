import appState from './modules/appState.js';
import { createTodo } from './factories/todoFactory.js';
import { render } from './ui/dom.js';
import './style.css'; 

appState.init();
initializeTheme();
render();

function initializeTheme() {
  const theme = localStorage.getItem('todo_theme') || 'light';
  applyTheme(theme);
  const toggle = document.getElementById('mode-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('todo_theme', theme);
  const toggle = document.getElementById('mode-toggle');
  if (toggle) {
    toggle.textContent = theme === 'dark' ? 'Light mode' : 'Night mode';
  }
}

// Add project
document.getElementById('project-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.getElementById('project-input');
  appState.addProject(input.value);

  input.value = '';
  render();
});

// Add todo
document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('todo-title').value;
  const desc = document.getElementById('todo-desc').value;
  const date = document.getElementById('todo-date').value;
  const priority = document.getElementById('todo-priority').value;

  const todo = createTodo(title, desc, date, priority);

  appState.addTodo(todo);

  e.target.reset();
  render();
});