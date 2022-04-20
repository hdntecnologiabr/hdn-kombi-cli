import { createStore } from "effector";

import { findTodos } from "./TodoEvents";
import { TodoState } from "./TodoState";

export const $todoStore = createStore<TodoState>({}).on(findTodos, (state) => ({
  ...state,
}));
