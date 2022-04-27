import { createStore } from "effector";

import { findTodos } from "./todo-events";
import { TodoState } from "./todo-state";

export const $todoStore = createStore<TodoState>({}).on(findTodos, (state) => ({
  ...state,
}));
