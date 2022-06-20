const exampleRoutes = context => {
  context.get(`/api/example`, () => {
    return context.schema.first("example").attrs;
  });
};
export default exampleRoutes;
