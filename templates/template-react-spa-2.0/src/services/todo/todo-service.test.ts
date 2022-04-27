import { makeServer } from "~mocks";
import axios from "axios";
import { Response, Server } from "miragejs";
import { beforeEach, describe, it } from "vitest";

import { TodoService } from "./todo-service";

describe("Todo service", () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer();

    return () => {
      server.shutdown();
    };
  });

  describe("find all", () => {
    it("should handle response properly", async () => {
      const todos = await TodoService.findAll();
      expect(todos.length).toBe(50);
    });

    it("should handle errors properly", async () => {
      server.get("/api/todos", () => new Response(500));

      try {
        await TodoService.findAll();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });
});
