import { TodoStatusEnum } from "~/data/enums";
import { TodoModel } from "~/data/models";
import { Factory } from "miragejs";

import { faker } from "@faker-js/faker";

const todo = Factory.extend<TodoModel>({
  id() {
    return faker.datatype.uuid();
  },
  status() {
    return faker.random.arrayElement([
      TodoStatusEnum.Doing,
      TodoStatusEnum.Done,
      TodoStatusEnum.ToDo,
    ]);
  },
  title() {
    return faker.lorem.word();
  },
  description() {
    return faker.lorem.words();
  },
  color() {
    return `#${faker.datatype.hexadecimal(7).substring(3)}`;
  },
});

export { todo };
