import { Server } from "miragejs";

export function seeds(server: Server): void {
  server.loadFixtures();

  server.createList("todo", 10);
}
