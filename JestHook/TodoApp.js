let todos = [];
function createTodo(title, description) {
  const todo = {
    id: todos.length + 1,
    title,
    description,
    completed: false
  };
  todos.push(todo);
  return todo;
}
function updateTodo(id, updates) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    throw new Error(`todo with id ${id} not found`);
  }
  Object.assign(todo, updates);
  //   6;
  //aleternate way of Object.assign
  return todo;
}
function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new Error(`todo with id ${id} not found`);
  }
  todos.splice(index, 1);
}

module.exports = {
  todos,
  createTodo,
  updateTodo,
  deleteTodo
};
