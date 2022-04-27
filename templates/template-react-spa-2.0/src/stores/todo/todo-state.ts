import { TodoModel } from "~/data/models";

export interface TodoState {
  todos?: TodoModel[];
  todo?: TodoModel;
}
