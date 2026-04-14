export function createTodo(title1, description, dueDate, priority) {
  return {
    id: crypto.randomUUID(),
    title1,
    description,
    dueDate,
    priority,
    completed: false
  };
}