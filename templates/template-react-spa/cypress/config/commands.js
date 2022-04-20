import '@percy/cypress';
import 'cypress-iframe';

Cypress.Commands.add('exampleCommand', () => {
  // do something
});

Cypress.Commands.add('setEnvConfig', (key, value) => {
  localStorage.setItem(key, value);
});