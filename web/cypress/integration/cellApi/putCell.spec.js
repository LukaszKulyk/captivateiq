context('PUT Cell', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/cells/', { fixture: 'cells.json' }).as('getCells');
    cy.visit('/');
    cy.wait('@getCells');
  });

  it('puts a cell content', () => {
    cy.intercept('PUT', 'api/cell/C_3', { fixture: 'C_3.json' }).as('putCell');

    cy.get('[data-qa="C3"]').dblclick().type('5').type('{enter}');

    cy.wait('@putCell');
  });

  it('returns with 500', () => {
    cy.intercept(
      {
        method: 'PUT',
        url: 'api/cell/*',
      },
      {
        statusCode: 500,
        delayMs: 3000,
      },
    ).as('putCell');

    cy.get('[data-qa="C3"]').dblclick().type('5').type('{enter}');
    cy.get('[data-qa="loadingSnake"]').should('be.visible');

    cy.wait('@putCell');
  });

  it('returns with 400', () => {
    cy.intercept(
      {
        method: 'PUT',
        url: 'api/cell/*',
      },
      {
        statusCode: 400,
        delayMs: 3000,
      },
    ).as('putCell');

    cy.get('[data-qa="C3"]').dblclick().type('5').type('{enter}');
    cy.get('[data-qa="loadingSnake"]').should('be.visible');

    cy.wait('@putCell');
  });

  // P2: See if you can further extend Cypress integration test cases with additional scenarios free of your choice
  // new scenario which covers additional 409 status response
  it('returns with 409', () => {
    cy.intercept(
      {
        method: 'PUT',
        url: 'api/cell/*',
      },
      {
        statusCode: 409,
        delayMs: 3000,
      },
    ).as('putCell');

    cy.get('[data-qa="C3"]').dblclick().type('5').type('{enter}');
    cy.get('[data-qa="loadingSnake"]').should('be.visible');

    cy.wait('@putCell');
  });
});
