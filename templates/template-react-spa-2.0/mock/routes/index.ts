import { Server } from "miragejs";

export function routes(this: Server): void {
  this.namespace = "api";

  this.get("/todos", (schema) => schema.db.todos);

  this.namespace = "";
  this.passthrough();
}
