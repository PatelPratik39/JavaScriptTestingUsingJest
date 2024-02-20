const { todos, createTodo, updateTodo, deleteTodo } = require("./TodoApp");

beforeEach(() => {
  todos.length = 0;
});

test("createTodo creates a new todo ", () => {
  const todo = createTodo("todo 1", "Detail 1");
  expect(todo.id).toBe(1);
  expect(todo.title).toBe("todo 1");
  expect(todo.description).toBe("Detail 1");
  expect(todo.completed).toBe(false);
  expect(todos.length).toBe(1);
});
test("updateTodo updates an existing todo", () => {
  const todo = createTodo("todo 1", "Detail 1");
  const updatedTodo = updateTodo(todo.id, { title: "New Title" });
  expect(updatedTodo.title).toBe("New Title");
});
test('updateTodo throws an error if todo is not Found', () => {
    expect(() => updateTodo(1, { title: "New Title" })).toThrow(
      "todo with id 1 not found"
    );
});
test("deleteTodo deletes an existing todo", () => {
  const todo = createTodo("todo 1", "Detail 1");
  deleteTodo(todo.id);
  expect(todos.length).toBe(0);
});
test("deleteTodo throws an error if todo is not found", () => {
  expect(() => deleteTodo(1)).toThrow("todo with id 1 not found");
});