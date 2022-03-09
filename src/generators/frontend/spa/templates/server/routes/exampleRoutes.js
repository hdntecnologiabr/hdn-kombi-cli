const exampleRoutes = (context) => {
  context.get(`/api/example`, () => {
    return {
      ok: true,
    };
  });
};
export default exampleRoutes;
