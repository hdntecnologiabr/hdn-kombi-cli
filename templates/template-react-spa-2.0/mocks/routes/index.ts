import { Server } from "miragejs";

import { factoryRoutes } from "./factory-routes";

export function routes(this: Server): void {
  this.namespace = "api";

  factoryRoutes.call(this, "todos");

  this.namespace = "";
  this.passthrough();
}
