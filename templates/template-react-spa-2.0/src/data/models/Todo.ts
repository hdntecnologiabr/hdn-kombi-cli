import { TodoStatusEnum } from "~/data/enums";

import { BaseModel } from "./Base";

export interface TodoModel extends BaseModel {
  title?: string;
  description?: string;
  status?: TodoStatusEnum;
  color?: string;
}
