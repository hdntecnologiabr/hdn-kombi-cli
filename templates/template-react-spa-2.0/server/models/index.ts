import { TodoModel } from "~/data/models";
import { Model } from "miragejs";

export const models = {
  todo: Model.extend<TodoModel>({}),
};
