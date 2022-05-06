// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';
import { putCell } from '../requests/updateCell';

Cypress.Commands.add('cleanGrid', (payloadData) => {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  chars.forEach((char) => {
    for (let i = 1; i <= 10; i++) {
      const cellId = `${char}_${i}`;
      cy.request(putCell(cellId, payloadData)).then((response) => {
        cy.wrap(response.status).should('eq', 200);
        cy.log(`Updated: ${cellId} with value ""`);
      });
    }
  });
});
