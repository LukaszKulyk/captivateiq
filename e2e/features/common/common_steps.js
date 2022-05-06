import { After, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

After(() => {
  cy.fixture('emptyValue').then((data) => cy.cleanGrid(data));
});

Given('Spreadsheet is opened', () => {
  cy.visit('/');
});

When('click on {string}', (target) => {
  cy.get(`[data-qa="${target}"]`).click();
});

When('double click on {string}', (target) => {
  cy.get(`[data-qa="${target}"]`).dblclick();
});

When('enter {string} value to {string}', (value, target) => {
  cy.get(`[data-qa="${target}"]`).type(value);
});

When('enter {string} value to {string} and press enter key', (val, target) => {
  cy.get(`[data-qa="${target}"]`).type(val).type('{enter}');
});

When('press {string} key', (key) => {
  cy.get('body').type(`{${key}}`);
});

When('press tab key', () => {
  cy.get('body').tab();
});

Then('{string} value is {string}', (target, value) => {
  cy.get(`[data-qa="${target}"]`).should('contain.text', value);
});

Then('editing mode is applied on {string}', (target) => {
  cy.get(`[data-qa="${target}"] [data-qa="editing"]`).should('exist');
});

Then('selected cell id is {string}', (cellId) => {
  cy.get(`[data-qa="selected cell id: ${cellId}"]`).should('be.visible');
});

Then('{string} does not exist', (target) => {
  cy.get(`[data-qa="${target}"]`).should('not.exist');
});

// this part was added for P0 task.
Then('cell {string} is marked', (target) => {
  cy.get(`[data-qa="${target}"]`).should('have.class', 'cDQCHL');
})
