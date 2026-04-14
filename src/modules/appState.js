import { createProject } from "../factories/projectFactory.js";

// --- Prywatne funkcje pomocnicze dla Storage ---

function saveToLocalStorage(projects) {
  localStorage.setItem("todo_projects", JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem("todo_projects");
  return saved ? JSON.parse(saved) : [];
}

// --- Stan aplikacji ---

let projects = loadFromLocalStorage();
let currentProjectId = projects.length > 0 ? projects[0].id : null;

// Inicjalizacja domyślnego projektu, jeśli lista jest pusta
function init() {
  if (projects.length === 0) {
    currentProjectId = null;
  } else if (!currentProjectId && projects.length > 0) {
    currentProjectId = projects[0].id;
  }
}

// --- Gettery ---

function getProjects() {
  return projects;
}

function getCurrentProject() {
  return projects.find((p) => p.id === currentProjectId) || projects[0];
}

// --- Akcje (z automatycznym zapisem) ---

function setCurrentProject(id) {
  currentProjectId = id;
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
  if (!currentProjectId) {
    currentProjectId = project.id;
  }
  saveToLocalStorage(projects);
}

function addTodo(todo) {
  const project = getCurrentProject();
  if (!project) return;

  project.todos.push(todo);
  saveToLocalStorage(projects);
}

function removeProject(id) {
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex === -1) return;

  projects.splice(projectIndex, 1);
  if (projects.length === 0) {
    currentProjectId = null;
  } else if (currentProjectId === id) {
    currentProjectId = projects[0].id;
  }

  saveToLocalStorage(projects);
}

function removeTodo(todoId) {
  const project = getCurrentProject();
  if (!project) return;

  project.todos = project.todos.filter((todo) => todo.id !== todoId);
  saveToLocalStorage(projects);
}

function toggleTodo(todoId) {
  const project = getCurrentProject();
  if (!project) return;

  const todo = project.todos.find((t) => t.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
    saveToLocalStorage(projects);
  }
}

export default {
  init,
  getProjects,
  getCurrentProject,
  setCurrentProject,
  addProject,
  addTodo,
  removeProject,
  removeTodo,
  toggleTodo,
};
