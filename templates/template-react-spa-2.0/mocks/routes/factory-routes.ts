import { Response, Server } from "miragejs";

function factoryRoutes(this: Server, apiPath: string): void {
  const API_PATH = apiPath;

  this.get(`/${API_PATH}`, (schema) => schema.db[API_PATH]);

  this.get(`/${API_PATH}/:id`, (schema, request) => {
    const id = request.params.id;

    return schema.db[API_PATH].find(id);
  });

  this.post(`/${API_PATH}`, (schema, request) => {
    const body = request.requestBody;

    schema.db[API_PATH].insert(body);

    return new Response(201);
  });

  this.put(`/${API_PATH}/:id`, (schema, request) => {
    const body = request.requestBody;

    schema.db[API_PATH].update(body);

    return new Response(204);
  });

  this.delete(`/${API_PATH}/:id`, (schema, request) => {
    const id = request.params.id;

    schema.db[API_PATH].remove(id);

    return new Response(200);
  });
}

export { factoryRoutes };
