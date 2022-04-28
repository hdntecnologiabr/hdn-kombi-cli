const exampleCheck = () => {
  cy.get(`.exampleClass`).should('not.exist');
};

const ExamplePage = {
  exampleCheck,
};

export default ExamplePage;
