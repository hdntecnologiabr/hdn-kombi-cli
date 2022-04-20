import { createEvent } from "effector";

const findTodos = createEvent();
const findTodo = createEvent();
const createTodo = createEvent();
const updateTodo = createEvent();
const deleteTodo = createEvent();

export { findTodos, findTodo, createTodo, updateTodo, deleteTodo };
